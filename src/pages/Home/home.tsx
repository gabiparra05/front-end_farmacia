function Home() {
    return (
        <>
            <div className="w-full flex justify-center py-4 .bg-gradient-to-r from-green-800 via-emerald-600 to-green-800 text-white">
                <div className='container grid grid-cols-2 text-green-900'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Venha se cuidar com a gente!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-green-900 bg-white
                                            border-white border-solid border-2 py-2 px-4'
                                >
                            
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
      
        </>
    )
}

export default Home