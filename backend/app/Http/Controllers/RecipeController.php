<?php

namespace App\Http\Controllers;

use App\Classes\ImageHandler;
use App\Models\Ingredient;
use Illuminate\Http\Request;
use App\Models\Recipe;
use App\Models\Image;
use App\Models\Rating;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class RecipeController extends Controller
{
    public function createARecipe(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'cuisine' => 'string',
            'ingredients' => 'required|array',
            'ingredients.*.name' => 'required|string',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 'failed',
                'message' => $validator->errors()
            ],400);
        }

        try {
            $recipe = Recipe::create([

                'user_id' => Auth::user()->id,
                'name' => $request->name,
                'cuisine' => $request->cuisine,
                'likes' => 0,
            ]);


    
            foreach ($request->ingredients as $ingredient) {

                Ingredient::create([

                    'recipe_id' => $recipe->id,
                    'name' => $ingredient['name'],

                ]);
            }

            foreach ($request->base64_images as $base64_image) {

                Image::create([

                    'recipe_id' => $recipe->id,
                    'pic_url' => ImageHandler::decodeAndStore($base64_image)

                ]);
            }

        } catch (\Throwable $th) {

            return response()->json([

                'status' => 'failed',
                'message' => 'An error occurred while processing the request',
                'throwable' => $th->errorInfo[2]

            ], 500);
        }

        return response()->json([

            'status' => 'success',
            'recipe' => $recipe,
            'ingredients' => $recipe->ingredients()->get(),
            'images' => $recipe->images()->get()

        ], 200);
    }


    public function getRecipe(int $id){
        
        $recipe = Recipe::with('ingredients')->find($id);
        $comments = $recipe->comments()->paginate(10);

        return response()->json([

            'status' => 'success',
            'recipe' => $recipe,
            'comments' => $comments

        ], 200);
    }

    public function search($search_query){
        $search_query_keywords = explode(' ', $search_query);

        $recipes = Recipe::where(function($query) use ($search_query_keywords){

            foreach ($search_query_keywords as $keyword) {
                $query->where('name', 'like', "%{$keyword}%")
                ->orWhere('cuisine', 'like', "%{$keyword}%")
                ->orWhereHas('ingredients', function ($query) use ($keyword) {
                    $query->where('name', 'like', "%{$keyword}%");
                })->get();
            }
        })->get();

        return response()->json([
            'status' => 'success',
            'results' => $recipes
        ]);
    }

    public function like(Request $request){
        Recipe::find($request->id)->increment('likes');
        
        return response()->json([
            'status'=>'successful',
            'message'=>'like added successfully'
        ]);
    }
    public function unlike(Request $request){
        Recipe::find($request->id)->decrement('likes');

        return response()->json([
            'status'=>'successful',
            'message'=>'like removed successfully'
        ]);
    }

    public function rate(Request $request){
        $validator = Validator::make($request->all(), [
            'recipe_id' => 'required|numeric',
            'value' => 'required|numeric|max:5'
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 'failed',
                'message' => $validator->errors()
            ],400);
        }

        try {
            $rating = Rating::create([
                'recipe_id' => $request->recipe_id,
                'value' => $request->value
            ]);
        } catch (\Throwable $th) {
            return response()->json([

                'status' => 'failed',
                'message' => 'An error occurred while processing the request',
                'throwable' => $th->errorInfo[2]

            ], 500);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'rating added successfully'
        ], 200);
    }
}
