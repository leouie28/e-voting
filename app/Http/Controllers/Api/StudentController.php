<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Vote;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    //
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    //
  }

  public function changePassword(Request $request)
  {
    $user = Auth::user();
    if (password_verify($request->old_password, $user->makeVisible(['password'])->password)) {
      $user->password = Hash::make($request->new_password);
      $user->save();
      return [
        'data' => $request,
        'type' => 'success',
        'message' => 'Password successfully updated...'
      ];
    }
    return [
      'data' => $request,
      'type' => 'error',
      'message' => 'Invalid current password...'
    ];
  }

  public function profile()
  {
    try {
      $user = Auth::guard('web')->user();
      return [
        'account' => Auth::guard('web')->user(),
        'activity' => Vote::where('student_id', $user->id)->orderBy('id', 'desc')->get()
      ];
    } catch (Exception $e) {
      return $e->getMessage();
    }
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
  }
}
