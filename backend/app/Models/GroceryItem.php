<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GroceryItem extends Model
{
    use HasFactory;

    protected $table = 'grocery-items';
    public $timestamps = false;

    protected $fillable = [
        'grocerylist_id',
        'name'
    ];

    public function groceryList(){
        return $this->belongsTo(GroceryList::class);
    }
}
