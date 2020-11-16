<?php

namespace App\Model;
use Illuminate\Database\Eloquent\Model;


class Partogram extends Model{
    protected $table = 'partogram';

    protected $fillable = [
        'gestational_age',
        'probable_date_of_birth',
        'last_mestruation_date',
        'gestations_number',
        'abortion_number',
        'childbirth_number',
        'normal_childbirth_number',
        'fetuses_number',
        'cesarean_childbirth_number',
        'abo',
        'childbirth_type',
        'rh',
        'presentation',
        'attitude',
        'position_variations',
        'number_of_children',
        'paciente_id',
        'professional_id',
        'weeks',
        'days'
    ];

}