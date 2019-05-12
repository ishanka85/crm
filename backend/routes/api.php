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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');

    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});

Route::group(['middleware' => 'auth:api'], function() {
  Route::post('/user/add', 'AuthController@addUser');
  Route::post('/user/{id}/delete', 'AuthController@delete');

  Route::post('/customer', 'CustomerController@store');
  
  Route::post('/customer/{id}/delete', 'CustomerController@destroy');
  Route::post('/customer/{id}/edit', 'CustomerController@update');

  Route::post('/customer/{id}/meeting/add', 'MeetingController@store');
  Route::post('/customer/meeting/{id}/delete', 'MeetingController@destroy');
  Route::get('/customer/{id}/meeting', 'MeetingController@index');

  Route::post('/customer/{id}/call/add', 'CallController@store');
  Route::post('/customer/call/{id}/delete', 'CallController@destroy');
  Route::get('/customer/{id}/call', 'CallController@index');

  Route::post('/customer/{id}/email/add', 'EmailController@store');
  Route::post('/customer/email/{id}/delete', 'EmailController@destroy');
  Route::get('/customer/{id}/email', 'EmailController@index');

});

Route::get('/customer', 'CustomerController@index'); 
