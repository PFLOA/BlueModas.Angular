import { Carrinho } from 'src/app/entities/carrinho.entity';
import { Venda } from './../../entities/venda.entity';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendaService } from 'src/app/service/venda/venda.service';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { ItemVenda } from 'src/app/entities/item-venda.entity';

@Component({
  selector: 'pfloa-resumo-venda',
  templateUrl: './resumo-venda.component.html',
  styleUrls: ['./resumo-venda.component.scss']
})
export class ResumoVendaComponent implements OnInit {
  venda: Venda;
  itens: ItemVenda[];
  itensVenda: Carrinho;
  idVenda: string | null = '';

  constructor(private vendaService: VendaService,private activatedRoute: ActivatedRoute, private router:Router, private carrinhoService: CarrinhoService) { 
    this.idVenda = this.activatedRoute.snapshot.paramMap.get('id');
    this.itensVenda = this.carrinhoService.getCarrinho();
    
  }

  ngOnInit(): void {
    this.vendaService.GetVendaById(Number(this.idVenda)).subscribe(retorno => { 
      this.venda = retorno;
      console.log(this.venda);
    });
  }

}
