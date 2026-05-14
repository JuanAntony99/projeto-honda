import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TELAPRINCIPAL from "./tela_principal.jsx";
import TELACADASTRO from "./tela_cadastro.jsx";
import TELALOGIN from "./tela_login.jsx";   // ← adiciona esse import

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TELAPRINCIPAL />} />
          <Route path="/login" element={<TELALOGIN />} />     {/* ← nova rota */}
          <Route path="/cadastro" element={<TELACADASTRO />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App