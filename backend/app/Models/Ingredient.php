<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredient extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'ingredients';

    protected $fillable = [
        'recipe_id',
        'name',
    ];

    public function recipe(){
        return $this->belongsTo(Recipe::class);
    }
}
