<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Email;

class EmailController extends Controller
{
  /**
   * List all emails.
   *
   * @return [string] message
   */
  public function index($id)
  {
    $emails = Email::where('customer_id', $id)->get();

    return response()->json($emails);
  }

  /**
   * Store the email in storage.
   *
   * @param  [int] customer_id
   * @param  [int] user_id
   * @param  [string] agenda
   * @return [string] message
   */
  public function store(Request $request, $id)
  {
    $validator = Validator::make($request->all(), [
        'user_id' => 'required',
        'to' => 'required|email',
        'cc' => 'email',
        'bcc' => 'email',
        'subject' => 'required',
        'body' => 'required'
    ]);

    if ($validator->fails()) {
      return response()->json(['errors'=>$validator->errors()]);
    }

    $email = new Email([
        'customer_id' => $id,
        'user_id' => $request->user_id,
        'to' => $request->to,
        'cc' => $request->cc,
        'bcc' => $request->bcc,
        'subject' => $request->subject,
        'body' => $request->body
    ]);
    $email->save();
    return response()->json([
        'message' => trans('messages.success_create_record')
    ], 201);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return [string] message
   */
  public function destroy($id)
  {
    if(\Auth::user()->role_id == 1){
      $email = Email::find($id);

      if($email == null){
        return response()->json([
            'error' => trans('messages.no_record_delete')
        ]);
      }
      $email->delete();

      return response()->json([
          'success' => trans('messages.success_delete_record')
      ]);
    }
    else{
      return response()->json([
          'error' => trans('messages.error_delete_record')
      ]);
    }
  }
}
