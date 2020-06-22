<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('customer_id');
            $table->integer('status_id');
            $table->float('total_price')->nullable();
            $table->text('comment')->nullable();
            $table->string("utm_source")->nullable();
            $table->string("utm_medium")->nullable();
            $table->string("utm_term")->nullable();
            $table->string("utm_content")->nullable();
            $table->string("utm_campaign")->nullable();
            $table->integer('delivery_id')->nullable();
            $table->string("waybill")->nullable();
            $table->string("address")->nullable();
            $table->date("sent")->nullable();
            $table->string("ip")->nullable();
            $table->string('website')->nullable();
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
        Schema::dropIfExists('orders');
    }
}
