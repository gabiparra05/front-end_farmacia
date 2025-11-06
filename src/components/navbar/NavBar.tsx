import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div
                className="w-full flex justify-center py-4
            			   bg-green-800 text-white"
            >
                <div className="container flex justify-between text-lg mx-8">
                    <Link to="/home" className="text-2xl font-boold text-white">
                        Farmacia Plantas e Raízes
                    </Link>

                    <div className="flex gap-4">
                        <Link
                            to="/categorias"
                            className="hover:underline hover:cursor-pointer ml-5"
                        >
                            Listas Categoria
                        </Link>
                        <Link
                            to="/cadastrarcategoria"
                            className="hover:underline hover:cursor-pointer ml-5"
                        >
                            Cadastrar Categoria
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
