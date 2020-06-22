<?php

namespace App\Http\Controllers;

use App\Order;
use App\Status;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class StatusController extends Controller
{
    public function getStatuses(){
        $statuses = Status::orderBy('created_at', 'ASC')->get();

        foreach($statuses as $status)
            $status->amount = Order::where('status_id', '=', $status['id'])->get()->count();

        return response()->json($statuses, 201);
    }


    public function getStatusInfo($id) {
        $status = Status::where('id', '=', $id)->get();

        return response()->json($status, 201);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            'name' => 'required',
            'color' => 'required',
            'colorText' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 244);
        }


        $lastStatus = Status::latest("order")->first();
        $lastStatus = $lastStatus['order'] + 1;


        $status = new Status;

        $status->name = $request->json()->get('name');
        $status->color = $request->json()->get('color');
        $status->colorText = $request->json()->get('colorText');
        $status->order = $lastStatus;
        $status->locked = 0;

        //return response()->json(array('status' => $status),  201);

        $status->save();

        return response()->json(array('id' => $status->id, 'order' => $status->order),  201);
    }


    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->json()->all(), [
            'name' => 'required',
            'color' => 'required',
            'colorText' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 244);
        }

        $status = Status::find($id);

        $status->name = $request->json()->get('name');
        $status->color = $request->json()->get('color');
        $status->colorText = $request->json()->get('colorText');


        $status->update();

        return response()->json(array('id' => $status->id, 'order' => $status->order),  201);
    }

}
