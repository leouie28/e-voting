<?php

use App\Http\Controllers\Api\AnnounceController;
use App\Http\Controllers\Api\ElectionController;
use App\Http\Controllers\Api\StudentController;
use App\Http\Controllers\Api\VoteController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:web']], function () {

  //election
  Route::controller(ElectionController::class)->group(function () {
    Route::post('election-api/{key}/check-code', 'checkCode');
    Route::get('election-api/{key}/election-set', 'getSet');
  });

  //get latest announcement
  Route::get('announces/get-latest', [AnnounceController::class, 'getLatest']);
  Route::get('profile', [StudentController::class, 'profile']);
  Route::put('change-password', [StudentController::class, 'changePassword']);

  Route::resources([
    'election-api' => ElectionController::class,
    'vote-api' => VoteController::class,
    'announces' => AnnounceController::class,
  ]);
});
