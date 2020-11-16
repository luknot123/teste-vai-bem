<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Estabelecimento extends Model {

    protected $table = 'estabelecimento';

    protected $fillable = [
        'nome',
        'descricao',
        'endereco',
        'telefone',
        'lat',
        'lng',
        'bairro',
        'cidade'
    ];
    
    // public function partogram() {
    //     return $this->belongsTo('App\Model\Partogram', 'partogram_id', 'id');
    // }

    // public function professional() {
    //     return $this->belongsTo('App\Model\professional', 'professional_id', 'id');
    // }

}