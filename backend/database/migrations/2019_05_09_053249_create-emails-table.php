<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('emails', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('customer_id')->unsigned();
          $table->integer('user_id')->unsigned();
          $table->string('to');
          $table->string('cc')->nullable();
          $table->string('bcc')->nullable();
          $table->string('subject');
          $table->text('body');
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
        Schema::dropIfExists('emails');
    }
}
