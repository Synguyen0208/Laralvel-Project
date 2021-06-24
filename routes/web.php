<?php

use Illuminate\Support\Facades\Route;
// Route::get('/', function () {
//     return view('pages/admin');
// });
// Route::get('/login', function () {
//     return view('pages/admin');
// });
Route::get('/', ['as' => 'Admin', 'uses' => 'App\Http\Controllers\PageController@index']);
Route::get('/get','App\Http\Controllers\PageController@get');
Route::get('/login', array('as' => 'Login', function()
{
    return view('pages/admin');
}));
Route::get('/log','App\Http\Controllers\PageController@login');
// Route::get('/send','App\Http\Controllers\PageController@send');