<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'recipe_id',
        'value'
    ];

    public function recipe(){
        return $this->belongsTo(Recipe::class);
    }
}
