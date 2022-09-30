<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExtractedVote extends Model
{
    use HasFactory;

    protected $fillable = [
        'vote_id',
        'position_id',
        'candidate_id',
        'student_id',
    ];

    public function vote()
    {
        return $this->belongsTo(Vote::class);
    }

    public function position()
    {
        return $this->belongsTo(Position::class);
    }

    public function candidate()
    {
        return $this->belongsTo(Candidate::class);
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}
