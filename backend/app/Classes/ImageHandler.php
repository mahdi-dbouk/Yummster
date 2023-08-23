<?php

namespace App\Classes;

use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;


class ImageHandler{

    public static function decodeAndStore($image_base64) {

        list($format, $image_data) = explode(';',$image_base64);
        list(,$format_type) = explode(':',$format);
        list(,$extention) = explode('/',$format_type);
        list(,$image_data) = explode(',', $image_data);
        
        try {
            $image = Image::make(base64_decode($image_data));
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'failed',
                'error' => $th->errorInfo[2],
            ]);
        }
        
        $filename = uniqid().'.'.$extention;

        try {
            Storage::disk('public')->put('public/images/'.$filename, $image->encode());
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'failed',
                'error' => $th->errorInfo[2],
            ]);
        }

        return asset('storage/public/images/'.$filename);
    }

}