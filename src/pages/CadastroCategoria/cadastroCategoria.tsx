function CadastroCategoria() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <form className="flex flex-col bg-white shadow-lg rounded-2xl p-8 w-96 gap-4">
        <h2 className="text-3xl font-bold text-center text-green-700">
          Cadastrar Categoria
        </h2>

        <div className="flex flex-col">
          <label htmlFor="nome" className="font-semibold text-slate-800">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite o nome da categoria"
            className="border-2 border-slate-300 rounded p-2 focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="descricao" className="font-semibold text-slate-800">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            placeholder="Digite uma descrição"
            rows={3}
            className="border-2 border-slate-300 rounded p-2 focus:outline-none focus:border-green-500 resize-none"
          />
        </div>

        <div className="flex gap-4 mt-4">
          <button
            type="reset"
            className="w-1/2 py-2 rounded bg-red-400 text-white font-semibold hover:bg-red-600 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="w-1/2 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-800 transition-colors"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  )
}

export default CadastroCategoria
