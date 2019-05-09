<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Meeting;

class MeetingController extends Controller
{
  /**
   * List all meetings.
   *
   * @return [string] meeting
   */
  public function index($id)
  {
      $meetings = Meeting::where('customer_id', $id)->get();

      return response()->json($meetings);

  }

  /**
   * Store the meetings in storage.
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
      'agenda' => 'required',
      'meeting_person' => 'required',
      'venue' => 'required',
      'summary' => 'required'
    ]);

    if ($validator->fails()) {
      return response()->json(['errors'=>$validator->errors()]);
    }

    $meeting = new Meeting([
        'customer_id' => $id,
        'user_id' => $request->user_id,
        'agenda' => $request->agenda,
        'meeting_person' => $request->meeting_person,
        'venue' => $request->venue,
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
      $meeting = Meeting::find($id);

      if($meeting == null){
        return response()->json([
            'error' => trans('messages.no_record_delete')
        ]);
      }
      $meeting->delete();

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
