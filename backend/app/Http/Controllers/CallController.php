<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Call;

class CallController extends Controller
{
  /**
   * List all calls.
   *
   * @return [string] message
   */
  public function index($id)
  {
    $calls = Call::where('customer_id', $id)->get();

    return response()->json($calls);
  }

  /**
   * Store the calls in storage.
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
      'phone_number' => 'required',
      'contact_person_name' => 'required',
      'subject' => 'required',
      'summary' => 'required'
    ]);

    if ($validator->fails()) {
      return response()->json(['errors'=>$validator->errors()]);
    }

    $meeting = new Call([
        'customer_id' => $id,
        'user_id' => $request->user_id,
        'phone_number' => $request->phone_number,
        'contact_person_name' => $request->contact_person_name,
        'subject' => $request->subject,
        'summary' => $request->summary
    ]);
    $meeting->save();
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
      $call = Call::find($id);

      if($call == null){
        return response()->json([
            'error' => trans('messages.no_record_delete')
        ]);
      }
      $call->delete();

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
