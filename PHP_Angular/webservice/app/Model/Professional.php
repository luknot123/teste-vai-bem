<?php

namespace App\Model;
use Illuminate\Database\Eloquent\Model;


class Professional extends Model{
    protected $table = 'professional';

    protected $fillable = [ 
        'nome_completo',
        'data_de_nascimento',
    ];

}