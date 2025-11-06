import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-green-800 text-white'>
                           

            
                <div className="container flex justify-between text-lg mx-8">
                     <Link to='/home' className="text-2xl font-boold text-white">Farmacia Plantas e Raízes</Link>

                    <div className='flex gap-4'>
                        Listas de Categorias
                        Cadastrar Categoria
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar