import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service.ts.service';

@Component({
  selector: 'app-medico-delete',
  templateUrl: './medico-delete.html',
  styleUrls: ['./medico-delete.css']
})
export class MedicoDeleteComponent implements OnInit {

  id_cli = ''


  medico: Medico = {
    id: '',
    nome: '',
    crm: '',
    telefone: '',
    dataNascimento: ''
  }

  constructor(
    private router: Router,
    private service: MedicoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id_cli = this.route.snapshot.paramMap.get('id')!
    this.findById();


  }

  findById(): void {

    this.service.findById(this.id_cli).subscribe(resposta => {

      this.medico = resposta;

    })
  }

  delete(): void {
    //id que passou na url
    this.service.delete(this.id_cli).subscribe(resposta => {

      this.router.navigate(['medicos'])
      this.service.message('Médico deletato com sucesso!')

    }, err => {

      console.log(err)

    })
  }

  cancel(): void {
    this.router.navigate(['medicos'])
  }

}

