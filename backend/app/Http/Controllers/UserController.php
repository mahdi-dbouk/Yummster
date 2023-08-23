<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function getProfile($id){
        
        $validator = Validator::make(['id'=>$id], [
            'id' => 'required|string'
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 'failed',
                'message' => $validator->errors()
            ],400);
        }

        try {
            $user = Auth::user();
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'failed',
                'message' => 'unable to retrieve profile info',
                'details' => $th->errorInfo[2],
            ],500);
        }


        return response()->json([
            'status' => 'success',
            'user' => $user
        ]);
    }

}
