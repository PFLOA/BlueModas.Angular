import { Endereco } from './endereco.entity';
import { Login } from './login.entity';
import { Telefone } from './telefones.entity';

export interface Cliente extends Login{
    name: string,
    dataCadatro?: Date,
    telefones?: Array<Telefone>,
    endereco?: Array<Endereco>
}
