<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
  protected $fillable = ['user_id', 'customer_id', 'agenda', 'meeting_person', 'venue', 'summary'];

  public function customer(){
    return $this->belongsTo("App\Customer");
  }

  public function user(){
    return $this->belongsTo("App\User");
  }

}
