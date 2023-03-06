<?php

namespace Database\Seeders;

use App\Models\Student;
use Illuminate\Database\Seeder;

class Studentseeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    Student::create([
      'name' => 'Student Test',
      'student_id' => '123-123123',
      'password' => bcrypt('123'),
    ]);
  }
}
