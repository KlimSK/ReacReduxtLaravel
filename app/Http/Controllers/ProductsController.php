<?php

namespace App\Http\Controllers;

use App\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;


class ProductsController extends Controller
{

    public function getProducts()
    {
        $products = Products::orderBy('created_at', 'desc')->get();

        return response()->json($products, 201);
    }

    public function getProductInfo($id)
    {

        $product = Products::where('id', '=', $id)->get();

        return response()->json($product, 201);
    }

    public function store(Request $request)
    {
        //

        $validator = Validator::make($request->json()->all(), [
            'name' => 'required',
            'currency_id' => 'required',
            'price' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 244);
        }

        $product = new Products;

        $product->name = $request->json()->get('name');
        $product->currency_id = $request->json()->get('currency_id');
        $product->price = floatval($request->json()->get('price'));
        $product->category_id = $request->json()->get('category_id');
        $product->model = $request->json()->get('model');
        $product->description = $request->json()->get('description');
        $product->amount = $request->json()->get('amount');
        $product->weight = $request->json()->get('weight');
        $product->height = $request->json()->get('height');
        $product->length = $request->json()->get('length');
        $product->width = $request->json()->get('width');



        $photoName = '';

        if ($request->json()->get('photo')) {

            $image = $request->json()->get('photo');

            $statement = DB::select("SHOW TABLE STATUS LIKE 'products'");
            $nextId = $statement[0]->Auto_increment;

            //$photoName = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            $photoName = "product-" . $nextId  . '-' . time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];

            Image::make($request->json()->get('photo'))->save(public_path('images/') . "products/" . $photoName);
        }
        $product->photo = $photoName;



        $product->save();

        return response()->json(array('id' => $product->id, 'photo' => $photoName),  201);
    }


    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->json()->all(), [
            'name' => 'required',
            'currency_id' => 'required',
            'price' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 244);
        }

        $product = Products::find($id);

        $oldProductPhoto = $product->photo;


        $product->name = $request->json()->get('name');
        $product->currency_id = $request->json()->get('currency_id');
        $product->price = floatval($request->json()->get('price'));
        $product->category_id = $request->json()->get('category_id');
        $product->model = $request->json()->get('model');
        $product->description = $request->json()->get('description');
        $product->amount = $request->json()->get('amount');
        $product->weight = $request->json()->get('weight');
        $product->height = $request->json()->get('height');
        $product->length = $request->json()->get('length');
        $product->width = $request->json()->get('width');

        $photoName = $oldProductPhoto;

        if ($request->json()->get('photo') !== $oldProductPhoto) {

            File::delete(public_path('images/')  . "products/" . $oldProductPhoto );

            $image = $request->json()->get('photo');

            $photoName = "product-" . $id  . '-' . time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];

            Image::make($request->json()->get('photo'))->save(public_path('images/') . "products/" . $photoName);
        }
        $product->photo = $photoName;

        $product->update();

        return response()->json(array('id' => $id, 'photo' => $photoName),  201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
