<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ElectionController;
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

Route::controller(AuthController::class)->group(function () {
  Route::post('/web/login', 'login');
  Route::get('/web/check-auth', 'checkAuth');
  Route::get('/web/logout', 'logout');
});

Route::get('/web/download-result/{id}', [ElectionController::class, 'downloadResult']);

Route::get('/{any?}', function () {
  return view('app');
})->where('any', '.*');
