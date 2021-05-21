import { ItemVenda } from './item-venda.entity';

export interface Carrinho{
    itemVenda: ItemVenda[],
    total: number,
    totalItens: number
}