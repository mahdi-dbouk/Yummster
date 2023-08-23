<?php

namespace App\Http\Controllers;

use App\Models\GroceryItem;
use App\Models\GroceryList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GroceryListController extends Controller
{
    public function createAGroceryList(Request $request){

        $validator = Validator::make($request->all(), [
            'user_id' => 'required|numeric',
            'items' => 'required|array',
            'items.*.name' => 'required|string'
        ]);
        
        if($validator->fails()){
            return response()->json([
                'status' => 'failed',
                'message' => $validator->errors()
            ],400);
        }

        try {
            $grocery_list = GroceryList::create([
                'user_id' => $request->user_id,
            ]);
    
            $items = [];
            foreach ($request->items as $item) {
                GroceryItem::create([
                    'grocerylist_id' => $grocery_list->id,
                    'name' => $item['name']
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'failed',
                'message' => 'An error occurred while processing the request',
                'details' => $th->errorInfo[2],
            ], 500);
        }

        return response()->json([
            'status' => 'success',
            'grocery-list' => $grocery_list,
            'grocery-items' =>$grocery_list->groceryItems()->get(),
        ], 200);

    }
}
