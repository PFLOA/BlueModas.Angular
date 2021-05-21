import { Produto } from './../../entities/produto.entity';
import { ItemVenda } from './../../entities/item-venda.entity';
import { ProdutoService } from './../../service/product/produto.service';
import { Component, OnInit, Output } from '@angular/core';
import { Carrinho } from 'src/app/entities/carrinho.entity';

@Component({
  selector: 'pfloa-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  produtos: Produto[] = [];

  cart: Carrinho = {
    itemVenda: [],
    total: 0,
    totalItens: 0,
  };

  itemVenda: ItemVenda;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  private listarProdutos(): void {
    this.produtoService
      .getAllProdutos()
      .subscribe((produtos: Produto[]) => this.produtos.push(...produtos));
  }

  public addToCart(produto: Produto) {
    this.itemVenda = {
      produto: produto,
      produtoId: produto.id,
      quantidade: 1,
    };

    let isAtArray = this.isProdutoAtArray(produto);
    if (isAtArray) {
      this.itemVenda.quantidade += isAtArray.quantidade;
      this.updateProdutoAtArray(isAtArray, this.itemVenda);
    } else {
      this.addNewPoduct(this.itemVenda);
    }
    this.cart.total += produto.preco;
    this.cart.totalItens += 1;
  }

  private addNewPoduct(item: ItemVenda) {
    this.cart.itemVenda.push(item);
  }

  private isProdutoAtArray(produto: Produto): ItemVenda | undefined {
    if (this.cart.itemVenda.length > 0) {
      let isProdutoFound = this.cart.itemVenda.find(
        (s) => s.produto.id == produto.id
      );
      return isProdutoFound;
    }
    return undefined;
  }

  private updateProdutoAtArray(item: ItemVenda, novoItem: ItemVenda) {
    let index = this.cart.itemVenda.indexOf(item);
    this.cart.itemVenda[index] = novoItem;
  }

  public abrir(id: number) {}
}
