import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import {useNavigate} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TELAPRINCIPAL from "./tela_principal.jsx";
import TELACADASTRO from "./tela_cadastro.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/cadastro" element={<TELACADASTRO />} />
          <Route path="/" element={<TELAPRINCIPAL />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
