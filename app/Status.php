<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{

    protected $fillable = [
        'name',
        'color',
        'text_color',
        'locked',
        'order'
    ];

    protected $table = "statuses";
}
