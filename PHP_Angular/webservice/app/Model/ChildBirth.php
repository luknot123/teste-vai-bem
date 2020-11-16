<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ChildBirth extends Model {

    protected $table = 'child_birth';

    protected $fillable = [
        'childbirth_date',
        'childbirth_type',
        'perineum',
        'perineum_degree',
        'delivement_one',
        'delivement_two',
        'anesthesia',
        'pinard_globe',
        'bleeding',
        'best_pratices',
        'tincture',
        'cesarean_indications',
        'surgical_diagnosis',
        'surgical_description',
        'first_hour_breastfeeding',
        'skin_to_skin_contact',
        'labor',
        'episiorraphy',
        'episiosuturerraphy',
        'perineum_type',
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