<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('statuses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('color');
            $table->string('text_color');
            $table->boolean('locked');
            $table->string('order');
            $table->timestamps();
        });


        DB::table('statuses')->insert(
            [
                ['name' => 'New', 'color' => "#db2828", "text_color" => "#fff", "locked" => true, "order" => 1],
                ['name' => 'Accepted', 'color' => "#21ba45", "text_color" => "#fff", "locked" => true, "order" => 2],
                ['name' => 'Sent', 'color' => "#fbbd08", "text_color" => "#fff", "locked" => true, "order" => 3],
                ['name' => 'Completed', 'color' => "#388e3c", "text_color" => "#fff", "locked" => true, "order" => 4],
                ['name' => 'Rejection', 'color' => "#e03997", "text_color" => "#fff", "locked" => true, "order" => 5],
            ]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('statuses');
    }
}
