<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    public function addComment(Request $request){
        
        $validator = Validator::make($request->all(), [
            'recipe_id' => 'required|string',
            'content' => 'required|string'
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 'failed',
                'message' => $validator->errors()
            ],400);
        }
        try {
            $comment = Comment::create([
                'user_id' => Auth::user()->id,
                'recipe_id' => $request->recipe_id,
                'content' => $request->content
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'failed',
                'message' => 'unable to add comment',
                'details' => $th->errorInfo[2],
            ],500);
        }

        return response()->json([
            'status' => 'success',
            'comment' => $comment,
        ]);
        
    }
}
