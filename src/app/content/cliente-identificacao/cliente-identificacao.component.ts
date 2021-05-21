import { ItemVendaRequest } from './../../entities/item-venda.entity';
import { CarrinhoService } from './../../service/carrinho.service';
import { VendaService } from './../../service/venda/venda.service';
import { ClienteService } from './../../service/cliente/cliente.service';
import { Venda, VendaRequest } from './../../entities/venda.entity';
import { Component, OnInit } from '@angular/core';
import { Carrinho } from 'src/app/entities/carrinho.entity';
import { Cliente } from 'src/app/entities/cliente.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'pfloa-cliente-identificacao',
  templateUrl: './cliente-identificacao.component.html',
  styleUrls: ['./cliente-identificacao.component.scss'],
})
export class ClienteIdentificacaoComponent implements OnInit {
  cart: Carrinho;

  nome: string;
  email: string;
  telefone: string;
  itemVRequest: ItemVendaRequest[] = [];
  venda: VendaRequest;
  cliente: Cliente;

  constructor(private carrinhoService: CarrinhoService,private clienteService: ClienteService, private vendaService: VendaService, private router: Router) {}

  ngOnInit(): void {
    this.cart = this.carrinhoService.getCarrinho();
  }

  public salvarVenda() {
    this.cliente = {
      email: this.email,
      name: this.nome,
      telefones: [
        {
          numero: this.telefone
        },
      ],
    };

    this.clienteService.AddCliente(this.cliente).subscribe(p => {
      this.cart.itemVenda.forEach(p => {
        let itemVenda = {
          produtoId: p.produtoId,
          quantidade: p.quantidade
        }

        this.itemVRequest.push(itemVenda);
      });

      this.venda = {
        clienteId: p.id,
        itens: this.itemVRequest,
        totalVenda: this.cart.total
      }

      this.vendaService.AddVenda(this.venda).subscribe(p => {
        if(p.id != null){
          this.router.navigate(['/resumo-venda', p.id]);
        }
      });
    });

  }
}
