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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//   return $request->user();
// });

Route::get('/verified-only', function (Request $request) {
  dd('your are verified', $request->user()->name);
})->middleware('auth:api', 'verified');

Route::post('/register', 'Api\AuthController@register');
Route::post('/login', 'Api\AuthController@login');

Route::post(
  '/password/email',
  'Api\ForgotPasswordController@sendResetLinkEmail'
);
Route::post('/password/reset', 'Api\ResetPasswordController@reset');

Route::get('/email/resend', 'Api\VerificationController@resend')->name(
  'verification.resend'
);

Route::get(
  '/email/verify/{id}/{hash}',
  'Api\VerificationController@verify'
)->name('verification.verify');

Route::apiResource('tasks', 'Api\TasksController')->middleware('auth:api');

// Test

Route::namespace('Api')->prefix('/user')->group(function () {
  Route::get('/users', 'UsersController@index');
  Route::get('/users/{user}', 'UsersController@show');
  Route::put('/users/{user}', 'UsersController@update');
  Route::middleware('auth:api')->delete('/users/{user}', 'UsersController@destroy');
  Route::post('/users', 'UsersController@store');
  Route::middleware('auth:api')->get('/current', 'UserController@currentUser');
});
