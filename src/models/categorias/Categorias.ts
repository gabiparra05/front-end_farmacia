import type Produto from "../produtos/Produtos";

export default interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  produto?: Produto[] | null;
}