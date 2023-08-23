<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'cuisine',
        'likes',
    ];

    protected $appends = ['images', 'average_rating'];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }

    public function plan(){
        return $this->belongsTo(Plan::class);
    }

    public function ingredients(){
        return $this->hasMany(Ingredient::class);
    }

    public function images(){
        return $this->hasMany(Image::class);
    }

    public function ratings(){
        return $this->hasMany(Rating::class);
    }

    

    public function getImagesAttribute(){
        return $this->images()->get();
    }

    public function getAverageRatingAttribute(){
        return $this->ratings()->avg('value');
    }
}
