<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Evolution extends Model {

    protected $table = 'evolution';

    protected $fillable = [
        'description',
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