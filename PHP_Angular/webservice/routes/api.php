<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register','UserController@register');
Route::post('login','UserController@loginWeb');
Route::post('login/app','UserController@loginApp');
Route::get('profile','UserController@getAuthenticatedUser');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'authLogged'], function () {

    Route::post('estabelecimento/save','EstabelecimentoController@save');
    Route::put('estabelecimento/update','EstabelecimentoController@update');
    Route::delete('estabelecimento/delete','EstabelecimentoController@delete');
    Route::get('estabelecimento/buscar','EstabelecimentoController@buscar');
    

});

