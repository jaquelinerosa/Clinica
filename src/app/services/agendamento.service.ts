import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Agendamento } from 'src/app/models/agendamento';
 
@Injectable()
export class AgendamentoService {
 
  baseURL: String = environment.baseUrl;
 
  constructor(private http: HttpClient,
    
    private snack: MatSnackBar) {
  }
 
  getAgendamento(): Observable<any> {
    return this.http.get(this.baseURL + 'agendamento')
  }
 
}
 