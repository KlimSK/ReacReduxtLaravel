<?php

namespace App\Http\Controllers;

use App\Connection;
use App\Products;
use App\Customers;
use App\Order;
use App\CustomerOrders;
use App\OrderProducts;
use App\Currency;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class ConnectionController extends Controller
{

    public function getConnections()
    {
        $connections = Connection::orderBy('id', 'desc')->get();

        foreach ($connections as $connection) {
            $connection['script'] = '<script src="' . url('/') . '/storage/api_connections/' . $connection['script'] . '"> </script>';
            $connection['product_name'] = Products::find($connection["product_id"])['name'];
            $currency_id = Products::find($connection["product_id"])['currency_id'];
            $connection['currency_symbol'] = Currency::find($currency_id)['symbol'];
        }

        return response()->json($connections, 201);
    }

    protected function generateRandomString($length = 10)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }


    protected function scriptContent($api_id, $product, $price, $add_field_1, $add_field_2, $add_field_3, $add_field_4)
    {
        return "window.addEventListener(\"load\", function (event) {

        let forms = document.querySelectorAll(\"form\");

        let sent = false;

        forms.forEach(form => {
           form.addEventListener('submit', (e) => {
               if(!sent) e.preventDefault();


               let name = \"\";
               let phone = \"\";

               for(let i = 0; i < form.elements.length; i++){
                   let fieldName = encodeURIComponent(form.elements[i].name).toLowerCase();
                   if(fieldName === 'name' || fieldName === 'buyer_name' || fieldName === 'customer_name')
                       name = encodeURIComponent(form.elements[i].value);
                   if(fieldName === 'phone' || fieldName === 'buyer_phone' || fieldName === 'customer_phone' || fieldName === 'phone_number')
                       phone = encodeURIComponent(form.elements[i].value).replace(/%2B/g, \"+\");
               }

               let ip = fetch('http://www.geoplugin.net/json.gp',
                   {
                       method: \"GET\",
                       headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                   })

                   .then(response => response.json())
                   .then(data => data.geoplugin_request)
                   .catch(() => console.log(\"Can't get IP\"));

               let url = 'http://crm.master/api/add_order_api';


               let addOrder = ip.then((ip) => {
                   let data = {
                       api_id: " . $api_id . ",
                       products: [
                           {
                               \"id\": " . $product . ",
                               \"amount\": 1,
                               \"price\": " . $price . ",
                           }
                       ],
                       total_price: 1200,
                       customer: name,
                       phone: phone,
                       email: \"\",
                       status: 1,
                       comment: \"\",
                       utm_source: \"\",
                       utm_medium: \"\",
                       utm_term: \"\",
                       utm_content: \"\",
                       utm_campaign: \"\",
                       delivery_id: 1,
                       waybill: \"\",
                       address: \"\",
                       ip: ip,
                       website: window.location.href,
                       additional_field_1: \"" . $add_field_1 . "\",
                       additional_field_2: \"" . $add_field_2 . "\",
                       additional_field_3: \"" . $add_field_3 . "\",
                       additional_field_4: \"" . $add_field_4 . "\",
                   };

                   fetch(url, {
                       method: \"POST\",
                       body: JSON.stringify(data),
                       headers: {'Content-Type': 'application/json'}
                   })
                       .then(response => {
                           return response.text()
                       })
                       .then(i => console.log(i))
                       .catch(() => console.log(\"Can't add order!\"));
               });

               setTimeout(() => {
                   sent = true;
                   form.submit();
               }, 1500);
           })
        });
    });";

    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            'product_id' => 'required',
            'website' => 'required',
            'price' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 244);
        }

        $connection = new Connection;

        $connection->website = $request->json()->get('website');
        $connection->product_id = $request->json()->get('product_id');
        $connection->price = $request->json()->get('price');
        $connection->additional_field_1 = $request->json()->get('additional_field_1');
        $connection->additional_field_2 = $request->json()->get('additional_field_2');
        $connection->additional_field_3 = $request->json()->get('additional_field_3');
        $connection->additional_field_4 = $request->json()->get('additional_field_4');

        $scriptName = "api_connection_" . $this->generateRandomString(8) . ".js";

        //return response()->json( url('/'), 201);


        $connection->script = $scriptName;

        $exportScript = '<script src="' . url('/') . '/storage/api_connections/' . $scriptName . '"> </script>';
        $connection->save();

        $scriptText = $this->scriptContent($connection->id, $request->json()->get('product_id'), $request->json()->get('price'),
            $request->json()->get('additional_field_1'), $request->json()->get('additional_field_2'),
            $request->json()->get('additional_field_3'), $request->json()->get('additional_field_4'));
        Storage::disk('public')->put("api_connections/" . $scriptName, $scriptText);


        return response()->json(array(
            "id" => $connection->id,
            "script" => $exportScript,
            "product_name" => Products::find($request->json()->get('product_id'))['name'],
        ), 201);
    }


    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->json()->all(), [
            'product_id' => 'required',
            'website' => 'required',
            'price' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 244);
        }

        $connection = Connection::find($id);

        $connection->website = $request->json()->get('website');
        $connection->product_id = $request->json()->get('product_id');
        $connection->price = $request->json()->get('price');
        $connection->additional_field_1 = $request->json()->get('additional_field_1');
        $connection->additional_field_2 = $request->json()->get('additional_field_2');
        $connection->additional_field_3 = $request->json()->get('additional_field_3');
        $connection->additional_field_4 = $request->json()->get('additional_field_4');

        $scriptName = "api_connection_" . $this->generateRandomString(8) . ".js";

        Storage::disk('public')->delete("api_connections/" . $connection->script);


        $scriptText = $this->scriptContent($id, $request->json()->get('product_id'), $request->json()->get('price'),
            $request->json()->get('additional_field_1'), $request->json()->get('additional_field_2'),
            $request->json()->get('additional_field_3'), $request->json()->get('additional_field_4'));

        Storage::disk('public')->put("api_connections/" . $scriptName, $scriptText);

        $connection->script = $scriptName;

        $exportScript = '<script src="' . url('/') . '/storage/api_connections/' . $scriptName . '"> </script>';
        $connection->update();

        return response()->json(array(
            "id" => $connection->id,
            "script" => $exportScript,
            "product_name" => Products::find($request->json()->get('product_id'))['name'],
        ), 201);
    }

    public function addOrderApi(Request $request)
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


        $api_webiste = Connection::find($request->json()->get('api_id'))['website'];

        if ($request->json()->get('website') !== $api_webiste)
            return response()->json('Wrong website!', 244);

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


        //return response()->json($request->json()->get("products"), 244);

        foreach ($request->json()->get("products") as $prod) {

            $orderProducts = new OrderProducts;
            $orderProducts->order_id = $order->id;
            $orderProducts->product_id = $prod['id'];
            $orderProducts->price = $prod['price'];
            $orderProducts->amount = $prod['amount'];

            $orderProducts->save();
        }

        $customerOrders = new CustomerOrders;
        $customerOrders->order_id = $order->id;
        $customerOrders->customer_id = $customer_id;

        $customerOrders->save();

        return response()->json(array("id" => $order->id), 201);
    }
}
