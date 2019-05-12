<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\User;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
  /**
   * Create user
   *
   * @param  [string] name
   * @param  [string] email
   * @param  [string] password
   * @param  [string] role_id
   * @return [string] message
   */
  public function addUser(Request $request)
  {
    if(Auth::user()->role_id == 1){
      $request->validate([
          'name' => 'required|string',
          'email' => 'required|string|email|unique:users',
          'password' => 'required|string',
          'role_id' => 'required'
      ]);
      $user = new User([
          'name' => $request->name,
          'email' => $request->email,
          'password' => bcrypt($request->password),
          'role_id' => $request->role_id
      ]);
      $user->save();
      return response()->json([
          'message' => trans('messages.success_create_user')
      ], 201);
    }
    else{
      return response()->json([
          'error' => trans('messages.error_create_user')
      ]);
    }
  }

  /**
   * Login user and create token
   *
   * @param  [string] email
   * @param  [string] password
   * @param  [boolean] remember_me
   * @return [string] access_token
   * @return [string] token_type
   * @return [string] expires_at
   */
  public function login(Request $request)
  {
      $validator = Validator::make($request->all(), [
          'email' => 'required|string|email',
          'password' => 'required|string',
          'remember_me' => 'boolean'
      ]);

      if ($validator->fails()) {
        return response()->json(['errors'=>$validator->errors()]);
      }

      $credentials = request(['email', 'password']);
      if(!Auth::attempt($credentials))
          return response()->json([
              'message' => 'Unauthorized'
          ], 401);
      $user = $request->user();
      $tokenResult = $user->createToken('Personal Access Token');
      $token = $tokenResult->token;
      if ($request->remember_me)
          $token->expires_at = Carbon::now()->addWeeks(1);
      $token->save();
      return response()->json([
          'access_token' => $tokenResult->accessToken,
          'token_type' => 'Bearer',
          'expires_at' => Carbon::parse(
              $tokenResult->token->expires_at
          )->toDateTimeString()
      ]);
  }

  /**
   * Logout user (Revoke the token)
   *
   * @return [string] message
   */
  public function logout(Request $request)
  {
      $request->user()->token()->revoke();
      return response()->json([
          'message' => 'Successfully logged out'
      ]);
  }

  /**
   * Get the authenticated User
   *
   * @return [json] user object
   */
  public function user(Request $request)
  {
      return response()->json($request->user());
  }

  /**
   * Delete user
   *
   * @param $id
   * @return [string] message
   */
  public function delete($id){
    if(Auth::user()->id == $id){
      return response()->json([
          'error' => trans('messages.error_delete_me')
      ]);
    }
    else if(Auth::user()->role_id == 1){
      $user = User::find($id);

      if($user == null){
        return response()->json([
            'error' => trans('messages.no_user_delete')
        ]);
      }
      $user->delete();

      return response()->json([
          'success' => trans('messages.success_delete_user')
      ]);
    }
    else{
      return response()->json([
          'error' => trans('messages.error_delete_user')
      ]);
    }
  }
}
