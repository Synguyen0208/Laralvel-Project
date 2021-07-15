<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login', ['as' => 'Login', 'uses' => 'App\Http\Controllers\PageController@login']);
Route::post('/send','App\Http\Controllers\PageController@send');
Route::get('/view','App\Http\Controllers\PageController@analytic');
Route::get('/training','App\Http\Controllers\PageClient@getTraining');