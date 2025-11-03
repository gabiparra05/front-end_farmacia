import Navbar from "./components/navbar/NavBar"
import Footer from "./components/footer/Footer"
import CadastroCategoria from "./pages/CadastroCategoria/cadastroCategoria"
import Home from "./pages/Home/home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastroCategoria" element={<CadastroCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
