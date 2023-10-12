import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoCreateComponent } from './views/components/medico/medico-create/medico-create';
import { MedicoDeleteComponent } from './views/components/medico/medico-delete/medico-delete';
import { MedicoReadComponent } from './views/components/medico/medico-read/medico-read';
import { MedicoUpdateComponent } from './views/components/medico/medico-update/medico-update';
import { PacienteCreateComponent } from './views/components/paciente/paciente-create/paciente-create.component';
import { PacienteDeleteComponent } from './views/components/paciente/paciente-delete/paciente-delete.component';
import { PacienteReadComponent } from './views/components/paciente/paciente-read/paciente-read.component';
import { PacienteUpdateComponent } from './views/components/paciente/paciente-update/paciente-update.component';

import { HomeComponent } from './views/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pacientes',
    component: PacienteReadComponent
  },
  {
    path: 'pacientes/create',
    component: PacienteCreateComponent
  },

  {

    path: 'pacientes/update/:id',
    component: PacienteUpdateComponent

  },

  {

    path: 'pacientes/delete/:id',
    component: PacienteDeleteComponent
  },

 
  {
    path: 'medicos',
    component: MedicoReadComponent
  },
  {
    path: 'medicos/create',
    component: MedicoCreateComponent
  },
  {
    path: 'medicos/update/:id',
    component: MedicoUpdateComponent
  },
  {
    path: 'medicos/delete/:id',
    component: MedicoDeleteComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
