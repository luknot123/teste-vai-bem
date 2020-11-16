<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class NewbornChildBirth extends Model {

    protected $table = 'newborn_child_birth';

    protected $fillable = [
        'presentation',
        'status',
        'apgar_first',
        'apgar_fifth',
        'gender',
        'weight',
        'capricious_week',
        'capricious_day',
        'note',
        'child',
        'childbirth_id',     
    ];

    public function partogram() {
        return $this->belongsTo('App\Model\Partogram', 'partogram_id', 'id');
    }

    public function professional() {
        return $this->belongsTo('App\Model\professional', 'professional_id', 'id');
    }

}