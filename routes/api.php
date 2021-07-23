<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageClient;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login', ['as' => 'Login', 'uses' => 'App\Http\Controllers\PageController@login']);
Route::post('/send','App\Http\Controllers\PageController@send');
Route::post('/verify','App\Http\Controllers\PageController@verify');
Route::get('/view','App\Http\Controllers\PageController@analytic');
Route::get('/staff','App\Http\Controllers\PageController@getStaff');
Route::post('/staff','App\Http\Controllers\PageController@addStaff');
Route::delete('/staff/{id}','App\Http\Controllers\PageController@deleteStaff');
Route::post('/updateStaff/{id}','App\Http\Controllers\PageController@updateStaff');
Route::get('/dataForm','App\Http\Controllers\PageController@getDataForm');

Route::get('/partner','App\Http\Controllers\PageController@getPartner');
Route::post('/partner','App\Http\Controllers\PageController@addPartner');
Route::post('/updatePartner/{id}','App\Http\Controllers\PageController@updatePartner');
Route::delete('/partner/{id}','App\Http\Controllers\PageController@deletePartner');

Route::get('/blog','App\Http\Controllers\PageController@getBlog');
Route::post('/blog','App\Http\Controllers\PageController@addBlog');
Route::post('/updateBlog/{id}','App\Http\Controllers\PageController@updateBlog');
Route::delete('/blog/{id}','App\Http\Controllers\PageController@deleteBlog');

Route::get('/partner_become','App\Http\Controllers\PageController@getPartnerBecome');
Route::delete('/partner_become/{id}','App\Http\Controllers\PageController@deletePartnerBecome');
Route::get('/keydate1','App\Http\Controllers\PageController@addKeyDate');
Route::get('/keydate','App\Http\Controllers\PageController@getKeyDate');
Route::post('/keydate','App\Http\Controllers\PageController@addKeyDate');
Route::post('/updateKeyDate/{id}','App\Http\Controllers\PageController@updateKeyDate');
Route::delete('/keydate/{id}','App\Http\Controllers\PageController@deleteKeyDate');

Route::get('/pnvalue','App\Http\Controllers\PageController@getPNValue');
Route::post('/pnvalue','App\Http\Controllers\PageController@addPnValue');
Route::post('/updateValue/{id}','App\Http\Controllers\PageController@updateValue');
Route::delete('/pnvalue/{id}','App\Http\Controllers\PageController@deleteValue');
Route::get('/training','App\Http\Controllers\PageClient@getTraining');
Route::get('/sharing','App\Http\Controllers\PageClient@getSharing');
Route::get('/getpartner','App\Http\Controllers\PageClient@getPartner');

Route::post('/donate','App\Http\Controllers\PageClient@donate');
Route::post('/donateGGP','App\Http\Controllers\PageClient@donateGGP');
Route::post('/contact',[PageClient::class,'mail']);
Route::get('/statistical','App\Http\Controllers\PageController@getDonateStatistical');
Route::get('/donator','App\Http\Controllers\PageController@getDonator');
Route::get('/payment','App\Http\Controllers\PageController@getTransaction');
Route::get('/getselections','App\Http\Controllers\PageClient@getSelection');
Route::post('/addselections','App\Http\Controllers\PageClient@addSelection');
Route::delete('/selection/{id}','App\Http\Controllers\PageController@deleteSelection');
Route::get('/getstaff','App\Http\Controllers\PageClient@getStaff');
Route::post('/addbecomepartner','App\Http\Controllers\PageClient@addBecomePartner');
Route::post('/itnuoiit','App\Http\Controllers\PageClient@donateIT');
Route::get('/itnuoiit','App\Http\Controllers\PageClient@donateIT');
