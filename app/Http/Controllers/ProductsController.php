<?php

namespace App\Http\Controllers;

use App\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;


class ProductsController extends Controller
{

    public function getProducts()
    {
        $products = Products::orderBy('created_at', 'desc')->get();

        return response()->json($products, 201);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

        $validator = Validator::make($request->json()->all(), [
            'name' => 'required',
            'currency_id' => 'required',
            'price' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
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


        if ($request->json()->get('photo')) {
            $image = $request->json()->get('photo');
            $photoName = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            Image::make($request->json()->get('photo'))->save(public_path('images/') . "products/" . $photoName);
        }
        $product->photo = $photoName;



        $product->save();
        return response()->json('Success', 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
