<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
  public function email(){
    return $this->belongsTo("App\Email");
  }

}
