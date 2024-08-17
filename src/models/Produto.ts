import Categoria from "./Categoria";

export default interface Produto {
    id: number;
    nome: string;
    marca: string;
    preco: number;
    quantidade: number;
    categoria: Categoria | null;
}
