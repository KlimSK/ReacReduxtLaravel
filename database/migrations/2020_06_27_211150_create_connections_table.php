<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConnectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('connections', function (Blueprint $table) {
            $table->id();
            $table->string('website');
            $table->integer('category_id');
            $table->integer('product_id');
            $table->float('price');
            $table->string('script');
            $table->string('additional_field_1')->nullable();
            $table->string('additional_field_2')->nullable();
            $table->string('additional_field_3')->nullable();
            $table->string('additional_field_4')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('connections');
    }
}
