<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \Laravel\Passport\Http\Controllers\AccessTokenController;

Route::post('login', [AccessTokenController::class, 'issueToken'])
        ->middleware(['api-login', 'throttle']);


//Auth
Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::get('profile', 'UserController@getAuthenticatedUser');
Route::post('logout', 'UserController@logout');

//Products
Route::post('add_product', 'ProductsController@store');
Route::post('get_products', 'ProductsController@getProducts');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
