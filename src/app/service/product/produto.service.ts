import { EndPointsApi } from './../endpoints/endPoints.class';
import { Produto } from './../../entities/produto.entity';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const url = EndPointsApi.ProdutoEndPoint;

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  constructor(private http: HttpClient) { }

  /**
   * Retorna todos os produtos.
   * @returns Observable<Produto[]>
   */
  public getAllProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(url);
  }
}
