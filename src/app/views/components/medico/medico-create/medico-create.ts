import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicoService } from 'src/app/services/medico.service.ts.service';
import { Medico } from 'src/app/models/medico'

@Component({
  selector: 'app-medico-create',
  templateUrl: './medico-create.html',
  styleUrls: ['./medico-create.css']
})
export class MedicoCreateComponent implements OnInit {

  medico: Medico = {
    id: '',
    nome: '',
    crm: '',
    telefone: '',
    dataNascimento: '',
  }
 
  nome = new FormControl('',[Validators.minLength(5)])
  crm = new FormControl('',[Validators.minLength(6)])
  telefone = new FormControl('',[Validators.minLength(10)])
  dataNascimento = new FormControl('',[Validators.minLength(10)])


  constructor(
    private router : Router,
    private service: MedicoService) { }

  ngOnInit(): void {
    console.log('Init')
  }

  cancel():void {
    this.router.navigate(['medicos'])
  }

  create():void {
    console.log('Creating')
    this.service.create(this.medico).subscribe((resposta) => {
      this.router.navigate(['medicos'])
      this.service.message('Médico cadastrado com Sucesso! :)')
    }, err => {
      if (err.error.error.match('já cadastrado')) {
        console.log('Log', err.error.error);
        this.service.message(err.error.error);
      } else if (err.error.errors[0].message === "número do registro de contribuinte individual brasileiro (CRM) inválido"){
        this.service.message(err.error.errors[0].message);
      }
    })
  }

  errorValidNome() {
    if (this.nome.invalid) {
      return "O campo deve ter no minimo 5 letras e não é permitido caracteres especiais"
    } 
    return false;
  }

  errorValidCrm() {
    if (this.crm.invalid) {
      return 'O campo deve ter 6 números'
    }
    return false;
  }

  errorValidDataNascimento() {
    if (this.dataNascimento.invalid) {
      return 'O campo deve ter 8 números'
    }
    return false;
  }

  errorValidTelefone() {

    if (this.telefone.invalid) {
      return 'O campo deve ter entre 10 a 11 números'
    }
    return false;
  }
}