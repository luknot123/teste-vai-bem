<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Model\Professional;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;
use Illuminate\Support\Facades\Log;

class UserController extends Controller{

    public function register(Request $request){

        $validator = Validator::make($request->json()->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6'],
            'registration' => ['required', 'string', 'max:10', 'unique:users,registration']
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(),400);
        }

        $user = User::create([
            'name' => $request->json()->get('name'),
            'email' => $request->json()->get('email'),
            'type' => $request->json()->get('type'),
            'registration' => $request->json()->get('registration'),
            'password'=> Hash::make($request->json()->get('password'))
        ]);

        // $professional_id = professional::where('id_user', $user->id)->get()[0]->id;            
        // $user->professional_id = $professional_id;

        $token = JWTAuth::fromUser($user);

        return response()->json(compact('user','token'),201);
    }

    public function loginWeb(Request $request){
        $credentials = $request->only(['email', 'password']);

        try{
            if($request->has("email")) {
                $credentials = array(
                    'email' => $request->get('email'),
                    'password' => $request->get('password')
                );


                $user = User::where('email', '=', $credentials['email'])
                    ->first();
                    
                if ($user != null) {
                    if (Hash::check($credentials['password'], $user->password)) {
                        $token = JWTAuth::fromUser($user);
                        return response()->json(compact('user', 'token'), 200);
                    }

                    return response()->json(['error' => 'Email ou Senha invalido'], 400);

                } else {
                    return response()->json(['error' => 'Não foi encontrado um usuário com este Email'], 400);
                }
            }

            if(!$token = JWTAuth::attempt($credentials)){
                return response()->json(['error'=>'Email ou Senha invalido'],400);
            }
        }catch(JWTException $e){
            return response()->json(['error'=>'Não pode criar o token'],500);
        }

        // return response()->json(compact('user', 'token'),200);
    }


    public function loginApp(Request $request){
        $credentials = $request->only(['password', 'registration']);

        try{
            if($request->has("registration")) {
                $credentials = array(
                    'registration' => $request->get('registration'),
                    'password' => $request->get('password')
                );

                $user = User::where('registration', '=', $credentials['registration'])
                    ->first();

                if ($user != null) {
                    $professional = Professional::where('id_user', $user->id)->first();

                    if ($professional == null) {
                        return response()->json(['error' => 'Não foi encontrado um professional com esta matrícula'], 200);
                    }

                    $user->professional_id = $professional->id;

                    if (Hash::check($credentials['password'], $user->password)) {
                        $token = JWTAuth::fromUser($user);
                        return response()->json(compact('user', 'token'), 200);
                    }

                    return response()->json(['error' => 'Matrícula ou Senha invalido'], 400);

                } else {
                    return response()->json(['error' => 'Não foi encontrado um professional com esta matrícula'], 400);
                }
            }

            if(!$token = JWTAuth::attempt($credentials)){
                return response()->json(['error'=>'Matrícula ou Senha invalido'],400);
            }
        }catch(JWTException $e){
            return response()->json(['error'=>'Não foi possível criar o token. Por favor, tente novamente'],500);
        }

        return response()->json(compact('user', 'token'),200);
    }

    

    public function getAuthenticatedUser(){
        try{
            if(!$user = JWTAuth::parseToken()->authenticate()){
                return response()->json(['user_not_found'],400);
            }
        }catch(Tymon\JWTAuth\Exceptions\TokenExpiredException $e){
            return response()->json(['token_expired'], 500);
        }catch(Tymon\JWTAuth\Exceptions\TokenInvalidException $e){
            return response()->json(['token_invalid'], 500);
        }catch(Tymon\JWTAuth\Exceptions\JWTException $e){
            return response()->json(['token_absent'], 500);
        }

        return response()->json(compact('user'));
    }

    public function updateTerms(Request $request){
        try{
            $user = User::find(JWTAuth::parseToken()->authenticate()->id);
            $user->terms = $request->all()['terms'];
            $user->save();
            if($request->all()['terms']=="true"){
                return response()->json(['success'=>'Termo aceito com sucesso'],200);
            }else{
                return response()->json(['success'=>'Termo recusado com sucesso'],200);
            }
        }catch (\Exception $e){
            Log::info($e);
            return response()->json(['error'=>'Ocorreu um erro interno'],500);
        }
        
    }
}