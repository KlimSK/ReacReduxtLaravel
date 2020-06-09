<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class CategoryController extends Controller
{

    public function getCategories(){
        $categories = Category::orderBy('created_at', 'DESC')->get();

        return response()->json($categories, 201);
    }

    public function getCategoryInfo($id) {
        $category = Category::where('id', '=', $id)->get();

        return response()->json($category, 201);
    }

    public function update (Request $request, $id){
        $validator = Validator::make($request->json()->all(), [
            'name' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 244);
        }

        $category = Category::find($id);

        $category->name = $request->json()->get('name');

        $category->update();

        return response()->json(array('id' => $category->id, 'date' => $category->created_at),  201);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            'name' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 244);
        }

        $category = new Category;

        $category->name = $request->json()->get('name');

        $category->save();

        return response()->json(array('id' => $category->id, 'date' => $category->created_at),  201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        //
    }
}
