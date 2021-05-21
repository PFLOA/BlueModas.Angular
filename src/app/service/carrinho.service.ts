import { Carrinho } from 'src/app/entities/carrinho.entity';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() { }

  private cart: Carrinho;

  setCarrinho(cart: Carrinho){
    this.cart = cart;
  }

  getCarrinho(){
    return this.cart;
  }
}
