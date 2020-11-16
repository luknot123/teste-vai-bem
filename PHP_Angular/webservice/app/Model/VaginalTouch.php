<?php

namespace App\Model;
use Illuminate\Database\Eloquent\Model;


class VaginalTouch extends Model{
    protected $table = 'vaginal_touch';

    protected $fillable = [
        'dilatation',
        'height_scale',
        'height_option',
        'pouch',
        'pouch_type',
        'position_variation',
        'schedule_pouch',
        'partogram_id',
    ];
    
}