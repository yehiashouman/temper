<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/




$router->group(['prefix' => 'admin'], function () use ($router) {
    //route to rendering endpoint
    $router->get('/dashboard', ['as'=>'admin','uses'=>'\\App\Http\Controllers\AdminController@index']);

});

$router->group(['prefix' => 'api'], function () use ($router) {
    //route to json test form
    $router->get('/insights', ['as'=>'api.find','uses'=>'\\App\Http\Controllers\APIController@user_retention_stats']);

});

