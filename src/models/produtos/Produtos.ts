import type Categoria from "../categorias/Categorias";

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
  categoria: Categoria | null;
}