<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageClient;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login', ['as' => 'Login', 'uses' => 'App\Http\Controllers\PageController@login']);
Route::post('/send','App\Http\Controllers\PageController@send');
Route::get('/view','App\Http\Controllers\PageController@analytic');

Route::post('/contact',[PageClient::class,'mail']);