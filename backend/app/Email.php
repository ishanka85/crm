<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
  protected $fillable = ['user_id', 'customer_id', 'to', 'cc', 'bcc', 'subject', 'body'];
  
  public function customer(){
    return $this->belongsTo("App\Customer");
  }

  public function user(){
    return $this->belongsTo("App\User");
  }

  public function attachments(){
    return $this->hasMany("App\Attachment");
  }
}
