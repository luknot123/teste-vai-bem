<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class FetalAuscultation extends Model {

    protected $table = 'fetal_auscultation';

    protected $fillable = [
        'g1',
        'bpm1',
        'g2',
        'bpm2',
        'g3',
        'bpm3',
        'professional_id',
        'partogram_id'
    ];

    public function partogram() {
        return $this->belongsTo('App\Model\Partogram', 'partogram_id', 'id');
    }

    public function professional() {
        return $this->belongsTo('App\Model\professional', 'professional_id', 'id');
    }

}