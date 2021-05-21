import { Cliente } from './cliente.entity';
import { TipoTelefone } from './enum/tipo-telefone.enum';
export interface Telefone{
    id?: number,
    numero: string,
    clienteId?: string,
    cliente?: Cliente,
    tipoTelefone?: TipoTelefone
}