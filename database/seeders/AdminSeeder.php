<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
//     Admin::create([
//       'name' => 'Admin',
//       'admin_id' => 'admin',
//       'password' => bcrypt('admin'), //password
//     ]);
      
    Admin::create([
      'name' => 'Admin2',
      'admin_id' => 'admin2',
      'password' => bcrypt('123'), //password
    ]);
  }
}
