<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    //

    protected $fillable = [
        'name',
        'currency_id',
        'price',
        //'model',
        //'category_id',
        //'model',
        //'description',
        //'photo',
        //'weight',
        //'height',
        //'length',
        //'width',
        //'amount'
    ];

    protected $table = "products";

    /*protected $primaryKey = "id";

    protected $timestamps = true;*/
}
