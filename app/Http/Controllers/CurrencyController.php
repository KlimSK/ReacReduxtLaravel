<?php

namespace App\Http\Controllers;

use App\Currency;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CurrencyController extends Controller
{

    public function getCurrencies(){
        $currencies = Currency::orderBy('created_at', 'desc')->get();
        return response()->json($currencies, 201);
    }

    public function getCurrencyInfo($id)
    {

        $currency = Currency::where('id', '=', $id)->get();

        return response()->json($currency, 201);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->json()->all(), [
            'name' => 'required',
            'symbol' => 'required',
            'shortName' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 244);
        }

        $currency = Currency::find($id);



        $currency->name = $request->json()->get('name');
        $currency->shortName = $request->json()->get('shortName');
        $currency->symbol = $request->json()->get('symbol');
        $currency->usd = $request->json()->get('usd');


        $currency->update();

        return response()->json(array('id' => $id),  201);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->json()->all(), [
            'name' => 'required',
            'symbol' => 'required',
            'shortName' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 244);
        }

        $currency = new Currency;

        $currency->name = $request->json()->get('name');
        $currency->symbol = $request->json()->get('symbol');
        $currency->shortName = $request->json()->get('shortName');
        $currency->usd = $request->json()->get('usd');

        $currency->save();

        return response()->json(array('id' => $currency->id),  201);
    }

}
