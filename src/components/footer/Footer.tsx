/* eslint-disable prefer-const */
function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-green-800 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Farmacia Ganjas | Copyright: {data}
                        </p>
                    <p className='text-lg'>Feito com Carinho </p>
                    <div className='flex gap-2'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer