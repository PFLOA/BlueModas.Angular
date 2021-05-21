import { TipoEndereco } from './enum/tipo-endereco.enum';
import { Cliente } from './cliente.entity';

export interface Endereco{
    id: number,
    clienteId: string,
    cliente: Cliente,
    rua: string,
    numero: string,
    complemento: string,
    bairro: string,
    cep: string,
    cidade: string,
    estado: string,
    observacoes: string,
    tipoEndereco: TipoEndereco
}