<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['recipe_id', 'pic_url'];

    public function recipe(){
        return $this->belongsTo(Recipe::class);
    }
}
