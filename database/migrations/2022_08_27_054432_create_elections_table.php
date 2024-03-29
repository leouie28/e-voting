<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateElectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('elections', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('school_year');
            $table->longText('description')->nullable();
            $table->boolean('active')->default(false);
            $table->date('date_open')->nullable();
            $table->time('time_open')->nullable();
            $table->date('date_close')->nullable();
            $table->time('time_close')->nullable();
            $table->string('code')->nullable();
            $table->string('urlkey');
            $table->integer('maker')->nullable();
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
        Schema::dropIfExists('elections');
    }
}
