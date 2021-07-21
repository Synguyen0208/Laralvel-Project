<?php

use Illuminate\Support\Facades\Route;
Route::get('/admin/login', ['as' => 'Login', 
function () {
    return view('pages/admin');
}
]);
Route::resource('admin', 'App\Http\Controllers\PageController');
Route::resource('', 'App\Http\Controllers\PageClient');
Route::get('/get', 'App\Http\Controllers\PageController@get');
Route::get('/log', 'App\Http\Controllers\PageController@login');
Route::get('return-vnpay', array('as' => 'status','uses' => 'App\Http\Controllers\PageClient@return',));