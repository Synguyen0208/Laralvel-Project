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
Route::get('/view', 'App\Http\Controllers\PageController@view');
// Route::get('/send','App\Http\Controllers\PageController@send');
Route::get('message', function () {
    $message['user'] = "Juan Perez";
    $message['message'] =  "Prueba mensaje desde Pusher";
    $success = event(new App\Events\NewMessage($message));
});