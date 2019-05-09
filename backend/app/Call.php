<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Call extends Model
{
  protected $fillable = ['user_id', 'customer_id', 'phone_number', 'contact_person_name', 'subject', 'summary'];

  public function customer(){
    return $this->belongsTo("App\Customer");
  }

  public function user(){
    return $this->belongsTo("App\User");
  }

}
