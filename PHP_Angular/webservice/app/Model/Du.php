<?php

namespace App\Model;
use Illuminate\Database\Eloquent\Model;


class Du extends Model{
    protected $table = 'du';

    protected $fillable = [
        'intensity',
        'contractions',
        'contractions_time',
        'professional_id',
        'partogram_id',
    ];
    
}
