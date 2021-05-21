import { environment } from '../../../environments/environment.prod'

export class EndPointsApi{
    
    /**
     * End Point => /api/v1/Produto
     */
    static ProdutoEndPoint = `${environment.urlApi}/api/v1/Produto`;

    /**
     * End Point => /api/v1/Cliente
     */
    static ClienteEndPoint = `${environment.urlApi}/api/v1/Cliente`;

    /**
     * End Point => /api/v1/Venda
     */
    static VendaEndPoint = `${environment.urlApi}/api/v1/Vendas`;

    /**
     * End Point => /api/v1/Users
     */
    static UsersEndPoint = `${environment.urlApi}/api/v1/Users`;

    /**
     * End Point => /api/v1/Categoria
     */
    static CategoriaEndPoint = `${environment.urlApi}/api/v1/Categoria`;

    /**
     * End Point => /api/v1/LoginCliente
     */
    static LoginClienteEndPoint = `${environment.urlApi}/api/v1/LoginCliente`;

    /**
     * End Point => /api/v1/LoginUser
     */
    static LoginUserEndPoint = `${environment.urlApi}/api/v1/LoginUser`;
}