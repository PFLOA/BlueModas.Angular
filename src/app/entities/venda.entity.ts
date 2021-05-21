import { Cliente } from './cliente.entity';
import { ItemVenda, ItemVendaRequest } from './item-venda.entity';

export interface VendaRequest{
    id?: number,
    clienteId?: string,
    totalVenda: number,
    cliente?: Cliente,
    itens: Array<ItemVendaRequest>
}

export interface Venda{
    id?: number,
    clienteId?: string,
    totalVenda: number,
    cliente: Cliente,
    itens: Array<ItemVenda>
}