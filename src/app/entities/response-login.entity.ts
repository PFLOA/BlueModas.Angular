import { Login } from './login.entity';

export interface ResponseLogin{
    token: string,
    login: Login
}