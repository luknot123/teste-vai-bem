<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class VitalSign extends Model {

    protected $table = 'vital_signs';

    protected $fillable = [
        'pa_systolic',
        'pa_diastolic',
        'temp',
        'pulse',
        'breath',
        'partogram_id'
    ];

    public function partogram() {
        return $this->belongsTo('App\Model\Partogram', 'partogram_id', 'id');
    }

}