import { Produto } from './produto.entity';

export interface ItemVenda {
    id?: number,
    produtoId: number,
    quantidade: number,
    produto: Produto
}

export interface ItemVendaRequest{
    id?: number,
    produtoId: number,
    quantidade: number,
}