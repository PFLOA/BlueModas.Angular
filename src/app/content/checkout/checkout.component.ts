import { Carrinho } from 'src/app/entities/carrinho.entity';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { ItemVenda } from 'src/app/entities/item-venda.entity';

@Component({
  selector: 'pfloa-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cart: Carrinho;
  nobj?: any;

  constructor(private carrinhoService: CarrinhoService, private router: Router) {
  }

  ngOnInit(): void {
     this.cart = this.carrinhoService.getCarrinho();
  }

  public removeItemCart(itemVenda: ItemVenda){
    let index = this.cart.itemVenda.indexOf(itemVenda);

    itemVenda.quantidade -= 1;
    this.cart.totalItens -= 1;
    this.cart.total -= itemVenda.produto.preco;
    this.cart.itemVenda[index] = itemVenda;
  }

  public addItemCart(itemVenda: ItemVenda){
    let index = this.cart.itemVenda.indexOf(itemVenda);
    
    this.cart.totalItens += 1;
    itemVenda.quantidade += 1;
    this.cart.total += itemVenda.produto.preco;
    this.cart.itemVenda[index] = itemVenda;

  }

  public addCarrinhoService(){
    this.carrinhoService.setCarrinho(this.cart);
  }

}
