<?php

namespace App\Model;
use Illuminate\Database\Eloquent\Model;


class Paciente extends Model{
    protected $table = 'pacientes';

    protected $fillable = [
        'nome_completo',
        'numero_prontuario',
        'data_de_nascimento',
    ];

}