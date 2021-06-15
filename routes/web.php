<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/table', function () {
    return view('welcome');
});
// Route::post('/update', ['as' => 'Product', 'uses' => 'App\Http\Controllers\PageController@addProduct']);
Route::post('/product', ['as' => 'Product', 'uses' => 'App\Http\Controllers\PageController@addProduct']);

Route::get('/type', ['as' => 'Type', 'uses' => 'App\Http\Controllers\PageController@getType']);
Route::post('/update', ['as' => 'Product', 'uses' => 'App\Http\Controllers\PageController@updateProduct']);
Route::get('/product', ['as' => 'Product', 'uses' => 'App\Http\Controllers\PageController@getProduct']);