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
Route::get('get_products', 'ProductsController@getProducts');
Route::get('get_product_info/{id}', 'ProductsController@getProductInfo');
Route::put('update_product/{id}', 'ProductsController@update');

//Currencies
Route::post('add_currency', 'CurrencyController@store');
Route::get('get_currencies', 'CurrencyController@getCurrencies');
Route::get('get_currency_info/{id}', 'CurrencyController@getCurrencyInfo');
Route::put('update_currency/{id}', 'CurrencyController@update');

//Categories
Route::post('add_category', 'CategoryController@store');
Route::get('get_categories', 'CategoryController@getCategories');
Route::get('get_category_info/{id}', 'CategoryController@getCategoryInfo');
Route::put('update_category/{id}', 'CategoryController@update');

//Statuses
Route::post('add_status', 'StatusController@store');
Route::get('get_statuses', 'StatusController@getStatuses');
Route::get('get_status_info/{id}', 'StatusController@getStatusInfo');
Route::put('update_status/{id}', 'StatusController@update');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
