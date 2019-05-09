<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Customer;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    /**
     * List all customer.
     *
     * @return [string] message
     */
    public function index()
    {
        $customers = Customer::all();

        return response()->json($customers);

    }

    /**
     * Store the customer in storage.
     *
     * @param  [string] name
     * @param  [string] email
     * @param  [string] contact_number
     * @param  [string] address
     * @param  [string] website
     * @return [string] message
     */
    public function store(Request $request)
    {
      $validator = Validator::make($request->all(),[
          'name' => 'required|string',
          'email' => 'required|string|email',
          'business_registration_number' => 'required',
          'contact_number' => 'required|regex:/[0-9]{10}/|min:9|max:10',
          'address' => 'required',
          'website' => 'required'
      ]);

      if ($validator->fails()) {
        return response()->json(['errors'=>$validator->errors()]);
      }
      
      $customer = new Customer([
          'name' => $request->name,
          'email' => $request->email,
          'business_registration_number' => $request->business_registration_number,
          'contact_number' => $request->contact_number,
          'address' => $request->address,
          'website' => $request->website
      ]);
      $customer->save();
      return response()->json([
          'message' => trans('messages.success_create_customer')
      ], 201);

    }


    /**
     * Update the specified customer in storage.
     *
     * @param  [int] id
     * @param  [string] name
     * @param  [string] email
     * @param  [string] contact_number
     * @param  [string] address
     * @param  [string] website
     * @return [string] message
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email',
            'business_registration_number' => 'required',
            'contact_number' => 'required|regex:/[0-9]{10}/|min:9|max:10',
            'address' => 'required',
            'website' => 'required'
        ]);

        if ($validator->fails()) {
          return response()->json(['errors'=>$validator->errors()]);
        }

        $customer = Customer::find($id);

        $customer->name = $request->name;
        $customer->email = $request->email;
        $customer->business_registration_number = $request->business_registration_number;
        $customer->contact_number = $request->contact_number;
        $customer->address = $request->address;
        $customer->website = $request->website;

        $customer->save();

        return response()->json([
            'success' => trans('messages.success_update_customer')
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  [int]  $id
     * @return [string] message
     */
    public function destroy($id)
    {
      if(\Auth::user()->role_id == 1){
        $customer = Customer::find($id);

        if($customer == null){
          return response()->json([
              'error' => trans('messages.no_customer_delete')
          ]);
        }
        $customer->delete();

        return response()->json([
            'success' => trans('messages.success_delete_customer')
        ]);
      }
      else{
        return response()->json([
            'error' => trans('messages.error_delete_customer')
        ]);
      }
    }
}
