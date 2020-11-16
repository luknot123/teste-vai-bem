<?php


namespace App\Http\Controllers;


use App\Model\Estabelecimento;
use App\Http\Utils\Utils;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EstabelecimentoController extends Controller {

    public function save(Request $request) {
        try {
            $data = $request->json()->all();
            Log::info($data);
            $data['lat']="";
            $data['lng']="";
            $estabelecimento = Estabelecimento::create($data);
            // Log::info($evolution);
            return response()->json(['success'=>'Registro cadastrado com sucesso'],200);

        } catch (\Exception $e) {
            Log::info('Exception class EstabelecimentoController method save');
            Log::info($e);
            return response()->json(['error'=>'Ocorreu um erro interno'],500);
        }
    }

    public function update(Request $request) {
        try {
            $data = $request->json()->all();
            $estabelecimento = Estabelecimento::find($data['id']);
            $estabelecimento->nome = $data['nome'];
            $estabelecimento->descricao = $data['descricao'];
            $estabelecimento->endereco = $data['endereco'];
            $estabelecimento->bairro = $data['bairro'];
            $estabelecimento->cidade = $data['cidade'];
            $estabelecimento->telefone = $data['telefone'];
            $estabelecimento->save();

            return response()->json(['success'=>'Registro atualizado com sucesso'],200);

        } catch (\Exception $e) {
            Log::info('Exception class EstabelecimentoController method update');
            Log::info($e);

            return response()->json(['error'=>'Ocorreu um erro interno'],500);
        }
    }

    public function delete(Request $request) {
        try {
            $data = $request->json()->all();
            $estabelecimento = Estabelecimento::find($data['id']);
            $estabelecimento->delete();
            return response()->json(['success'=>'Registro removido com sucesso'],200);
        } catch (\Exception $e) {
            Log::info('Exception class EstabelecimentoController method delete');
            Log::info($e);
            return response()->json(['error'=>'Ocorreu um erro interno'],500);
        }
    }

    public function buscar(Request $request) {
        try {
            $endereco = $request->input('endereco');
            $latlng = Utils::getLatlng($endereco);
            // $listEstabelecimentos = Estabelecimento::all();
            Log::info($latlng);

            return response()->json(['success'=>'Registro removido com sucesso'],200);
        } catch (\Exception $e) {
            Log::info('Exception class EstabelecimentoController method delete');
            Log::info($e);
            return response()->json(['error'=>'Ocorreu um erro interno'],500);
        }
    }

}