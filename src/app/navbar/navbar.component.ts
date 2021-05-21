import { CarrinhoService } from './../service/carrinho.service';
import { ItemVenda } from './../entities/item-venda.entity';
import { Carrinho } from 'src/app/entities/carrinho.entity';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pfloa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() carrinho: Carrinho;

  constructor(private carrinhoService: CarrinhoService) { }
  
  ngOnInit(): void {
  }

  public removeCart(itemVenda: ItemVenda){
    let index = this.carrinho.itemVenda.indexOf(itemVenda);
    this.carrinho.itemVenda.splice(index, 1);

    this.carrinho.total -= itemVenda.produto.preco * itemVenda.quantidade;
    this.carrinho.totalItens -= itemVenda.quantidade;
  }

  public addCarrinhoService(){
    this.carrinhoService.setCarrinho(this.carrinho);
  }

}
