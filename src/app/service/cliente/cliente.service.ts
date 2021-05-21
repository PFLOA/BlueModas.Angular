import { Cliente } from './../../entities/cliente.entity';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EndPointsApi } from '../endpoints/endPoints.class';

const url = EndPointsApi.ClienteEndPoint;

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public getAllClientes(){
    
  }

  public AddCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(url, cliente);
  }
}
