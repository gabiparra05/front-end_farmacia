import { Link } from "react-router-dom";
import type Categoria from "../../../models/categorias/Categorias";

interface CardCategoriaProps {
    categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
            <header className="py-2 px-6 bg-[#4A70A9] text-white font-bold text-2xl">
                {categoria.nome}
            </header>

            <p className="p-8 text-3xl bg-[#F4F4F4] h-full">
                {categoria.descricao}
            </p>

            <div className="flex">
                <Link
                    to={`/editarcategoria/${categoria.id}`}
                    className="w-full text-slate-100 bg-[#6D94C5] hover:bg-[#234C6A] flex items-center justify-center py-2"
                >
                    <button>Editar</button>
                </Link>

                <Link
                    to={`/deletarcategoria/${categoria.id}`}
                    className="w-full text-slate-100 bg-red-400 hover:bg-red-700 flex items-center justify-center"
                >
                    <button>Apagar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardCategoria;
