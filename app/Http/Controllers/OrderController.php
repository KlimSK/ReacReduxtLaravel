<?php

namespace App\Http\Controllers;

use App\Currency;
use App\CustomerOrders;
use App\Customers;
use App\Order;
use App\OrderProducts;
use App\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{

    public function getOrders()
    {
        $orders = Order::orderBy('id', 'desc')->get();

        foreach ($orders as $order) {
            $customer = Customers::find($order->customer_id);
            $order->customer = $customer['name'];
            $order->phone = $customer['phone'];
            $order->email = $customer['email'];

            $products = OrderProducts::where('order_id', '=', $order->id)->get();
            $prods = array();
            foreach ($products as $prod) {
                $product = Products::find($prod['product_id']);
                $prod['name'] = $product['name'];
                $prod['category'] = $product['category_id'] ? $product['category_id'] : 0;
                $prod['currency'] = Currency::find($product['currency_id'])['symbol'];
                array_push($prods, $prod);
            }
            $order->products = $prods;
        }

        return response()->json($orders, 201);
    }


    public function getOrdersByStatus($id)
    {
        $orders = Order::orderBy('created_at', 'desc')->where('status_id', '=', $id)->get();

        foreach ($orders as $order) {
            $customer = Customers::find($order->customer_id);
            $order->customer = $customer['name'];
            $order->phone = $customer['phone'];
            $order->email = $customer['email'];

            $products = OrderProducts::where('order_id', '=', $order->id)->get();
            $prods = array();
            foreach ($products as $prod) {
                $product = Products::find($prod['product_id']);
                $prod['name'] = $product['name'];
                $prod['category'] = $product['category_id'] ? $product['category_id'] : 0;
                $prod['currency'] = Currency::find($product['currency_id'])['symbol'];
                array_push($prods, $prod);
            }
            $order->products = $prods;
        }

        return response()->json($orders, 201);
    }


    public function store(Request $request)
    {


        $validator = Validator::make($request->json()->all(), [
            'customer' => 'required',
            'status' => 'required',
            'phone' => 'required_without:email',
            'email' => 'required_without:phone',
            'products' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 244);
        }


        $customer = new Customers;

        //return response()->json( 'test', 224);

        $customer_id = 0;
        $oldCustomer = Customers::where('phone', 'like', "%{$request->json()->get('phone')}%")->get();


        if ($oldCustomer->isEmpty()) {
            $customer->name = $request->json()->get("customer");
            $customer->phone = $request->json()->get("phone");
            $customer->email = $request->json()->get("email");

            $customer->save();
            $customer_id = $customer->id;
        } else
            $customer_id = $oldCustomer[0]->id;


        $order = new Order;

        $order->customer_id = $customer_id;
        $order->status_id = $request->json()->get("status");
        $order->total_price = $request->json()->get("total_price");
        $order->comment = $request->json()->get("comment");
        $order->utm_medium = $request->json()->get("utm_medium");
        $order->utm_term = $request->json()->get("utm_term");
        $order->utm_content = $request->json()->get("utm_content");
        $order->utm_source = $request->json()->get("utm_source");
        $order->utm_campaign = $request->json()->get("utm_campaign");
        $order->delivery_id = $request->json()->get("delivery_id");
        $order->waybill = $request->json()->get("waybill");
        $order->address = $request->json()->get("address");
        $order->sent = $request->json()->get("sent");
        $order->ip = $request->json()->get("ip");
        $order->website = $request->json()->get("website");
        $order->additional_field_1 = $request->json()->get("additional_field_1");
        $order->additional_field_2 = $request->json()->get("additional_field_2");
        $order->additional_field_3 = $request->json()->get("additional_field_3");
        $order->additional_field_4 = $request->json()->get("additional_field_4");

        $order->save();

        foreach ($request->json()->get("products") as $prod) {

            $orderProducts = new OrderProducts;
            $orderProducts->order_id = $order->id;
            $orderProducts->product_id = $prod['id'];
            $orderProducts->price = $prod['price'];
            $orderProducts->amount = $prod['amount'];


            //Increase or decrease amount of products depending on the status
            $product = Products::where('id', '=', $prod['id'])->get()[0];

            if ($request->json()->get("status") == 3 or $request->json()->get("status") == 4) {
                $amount = intval($product->amount) - 1;
                $product->amount = $amount;
                $product->update();
            } else if ($request->json()->get("status") == 5) {
                $amount = intval($product->amount) + 1;
                $product->amount = $amount;
                $product->update();
            }


            $orderProducts->save();
        }

        $customerOrders = new CustomerOrders;
        $customerOrders->order_id = $order->id;
        $customerOrders->customer_id = $customer_id;

        $customerOrders->save();

        return response()->json(array("id" => $order->id), 201);
    }


    public function update(Request $request, $id)
    {


        $validator = Validator::make($request->json()->all(), [
            'customer' => 'required',
            'status' => 'required',
            'phone' => 'required_without:email',
            'email' => 'required_without:phone',
            'products' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 244);
        }

        $customerOrders = CustomerOrders::where('order_id', '=', $id)->get()[0];

        $customer = new Customers;

        //return response()->json( $request->json()->get("previousProducts"), 224);

        $customer_id = 0;
        $oldCustomer = Customers::where('phone', 'like', "%{$request->json()->get('phone')}%")->get();


        if ($oldCustomer->isEmpty()) {
            $customer->name = $request->json()->get("customer");
            $customer->phone = $request->json()->get("phone");
            $customer->email = $request->json()->get("email");

            $customer->save();
            $customer_id = $customer->id;
        } else
            $customer_id = $oldCustomer[0]->id;


        $order = Order::find($id);

        $order->customer_id = $customer_id;
        $order->status_id = $request->json()->get("status");
        $order->total_price = $request->json()->get("total_price");
        $order->comment = $request->json()->get("comment");
        $order->utm_medium = $request->json()->get("utm_medium");
        $order->utm_term = $request->json()->get("utm_term");
        $order->utm_content = $request->json()->get("utm_content");
        $order->utm_source = $request->json()->get("utm_source");
        $order->utm_campaign = $request->json()->get("utm_campaign");
        $order->delivery_id = $request->json()->get("delivery_id");
        $order->waybill = $request->json()->get("waybill");
        $order->address = $request->json()->get("address");
        $order->sent = $request->json()->get("sent");
        $order->ip = $request->json()->get("ip");
        $order->website = $request->json()->get("website");
        $order->additional_field_1 = $request->json()->get("additional_field_1");
        $order->additional_field_2 = $request->json()->get("additional_field_2");
        $order->additional_field_3 = $request->json()->get("additional_field_3");
        $order->additional_field_4 = $request->json()->get("additional_field_4");

        $order->update();


        if ($request->json()->get("products") != $request->json()->get("previousProducts")) {
            //return response()->json( $request->json()->get("products"), 224);

            foreach ($request->json()->get("previousProducts") as $prod) {
                //return response()->json( $prod, 224);

                OrderProducts::where([
                    ['order_id', '=', $id],
                    ['product_id', '=', $prod['product_id']]
                ])->delete();
            }

            foreach ($request->json()->get("products") as $prod) {

                $orderProducts = new OrderProducts;

                $orderProducts->order_id = $id;
                $orderProducts->product_id = $prod['product_id'];
                $orderProducts->price = $prod['price'];
                $orderProducts->amount = $prod['amount'];
                $orderProducts->save();


                //Increase or decrease amount of products depending on the status
                $product = Products::where('id', '=', $prod['product_id'])->get()[0];

                if ($request->json()->get("status") == 3 or $request->json()->get("status") == 4) {
                    $amount = intval($product->amount) - 1;
                    $product->amount = $amount;
                    $product->update();
                } else if ($request->json()->get("status") == 5) {
                    $amount = intval($product->amount) + 1;
                    $product->amount = $amount;
                    $product->update();
                }

            }
        }


        $customerOrders->order_id = $id;
        $customerOrders->customer_id = $customer_id;

        $customerOrders->update();

        return response()->json(array("id" => $id), 201);
    }


}
