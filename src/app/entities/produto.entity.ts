import { Byte } from "@angular/compiler/src/util";

export interface Produto{
    id: number,
    nome: string,
    preco: number,
    imagem: Byte,
    categoriaId: number,
    descricao: string
}