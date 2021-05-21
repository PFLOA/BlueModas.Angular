import { Venda, VendaRequest } from './../../entities/venda.entity';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointsApi } from '../endpoints/endPoints.class';
import { Observable } from 'rxjs';

const url = EndPointsApi.VendaEndPoint;

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private http: HttpClient) { }

  public AddVenda(venda: VendaRequest): Observable<Venda>{
    return this.http.post<Venda>(url, venda);
  }
  public GetVendaById(id: number): Observable<Venda>{
    return this.http.get<Venda>(`${url}/${id}`);
  }
}
