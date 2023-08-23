<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\GroceryListController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use PharIo\Manifest\AuthorCollectionIterator;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['middleware' => 'auth:api'], function(){
    Route::post('create-recipe', [RecipeController::class, 'createARecipe']);
    Route::post('create-grocery-list', [GroceryListController::class, 'createAGroceryList']);
    Route::post('add-comment', [CommentController::class, 'addComment']);
    Route::post('like', [RecipeController::class, 'like']);
    Route::post('unlike', [RecipeController::class, 'unlike']);
    Route::post('rate', [RecipeController::class, 'rate']);
    Route::get('profile/{id}',[UserController::class, 'getProfile']);
    Route::get('recipe/{id}', [RecipeController::class, 'getRecipe']);
    Route::get('search/{search_query}', [RecipeController::class, 'search']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::get('logout', [AuthController::class, 'logout']);
});

Route::post('register', [AuthController::class, 'register']);
Route::group(['middleware'=>'throttle:login'], function(){
    Route::post('login', [AuthController::class, 'login']);
});
Route::get('unauthorized', [AuthController::class, 'unauthorized'])->name('unauthorized');
