<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
  protected $fillable = ['name', 'address', 'email', 'website', 'contact_number', 'business_registration_number'];

  public function meetings(){
    return $this->hasMany("App\Meeting");
  }

  public function calls(){
    return $this->hasMany("App\Call");
  }

  public function emails(){
    return $this->hasMany("App\Email");
  }

}
