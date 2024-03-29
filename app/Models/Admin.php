<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Admin extends Authenticatable
{
    use HasFactory, HasApiTokens;

    protected $filable = [
        'name',
        'admin_id',
        'password',
        'active',
    ];

    protected $hidden = [
        'password'
    ];

    public function election()
    {
        return $this->hasMany(Election::class, 'maker');
    }
}
