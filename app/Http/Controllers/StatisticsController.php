<?php

namespace App\Http\Controllers;

use App\Currency;
use App\CustomerOrders;
use App\Order;
use App\OrderProducts;
use App\Customers;
use App\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class StatisticsController extends Controller
{
    public function getStatisticsProducts(Request $request){

        //return response()->json($request->all(), 244);

        $validator = Validator::make($request->all(), [
            'products' => 'required',
            'currency_id' => 'required',
            'type' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 244);
        }

        $orders = Order::where("status_id", "=", 4)->get();

        $products = [];

        foreach($orders as $order){
            $product = OrderProducts::where('order_id', '=', $order['id'])->
                whereIn('product_id', $request->products)->get();
            array_push($products, $product);
        }

        return response()->json($products, 222);

    }


    public function getStatisticsCustomers(Request $request)
    {

        //return response()->json($request->all(), 222);


        $validator = Validator::make($request->all(), [
            'customers' => 'required',
            'type' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 244);
        }

        $orders = Order::where("status_id", "=", 4)->get();

        $customers = [];



        foreach($orders as $order){
            $customer = CustomerOrders::where('order_id', '=', $order['id'])->
            whereIn('customer_id', $request->customers)->get();


            if(count($customer) > 0){
                //return response()->json(count($customer) > 0, 201);

                $product = OrderProducts::where('order_id', '=', $order['id'])->get()[0];

                $currencyID = Products::where('id', '=', $product['product_id'])->get()[0]['currency_id'];

                $currency = Currency::find($currencyID);

                $customer[0]['price'] = number_format((float)($order['total_price'] / $currency['usd']), 2, '.', '');

                array_push($customers, $customer);
            }

        }

        return response()->json($customers, 222);
    }


    public function getCustomers(){
        $customers = Customers::orderBy("created_at", "desc")->get();

        return response()->json($customers, 201);
    }
}
