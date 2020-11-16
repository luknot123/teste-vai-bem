<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Medication extends Model {

    protected $table = 'medication';

    protected $fillable = [
        'others',
        'ocitocina',
        'plasil',
        'sulfato_magnesio',
        'hidralazina',
        'dexametasona',
        'soro_sf',
        'soro_glicosado',
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