import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "./tela_principal.css";
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useEffect } from "react";

function tela_principal() {
  
  const [produtos, setDados] = useState([]);

  useEffect(() => {
    buscarProdutos();
  }, []); 

  async function buscarProdutos() {
    try {
      const resposta = await fetch('http://localhost:3000/produtos');
      const produtos = await resposta.json();
      setDados(produtos);
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
  }

  const navigate = useNavigate();


  return (
    <div className="container-principal">

      <nav className="navbar">
        
        <div className='logo'>
          <img src='Honda_logo.png'></img>
        </div>

        <div className="links">
          <a onClick={() => navigate('/')}>Home</a>
          <a onClick={() => navigate('/login')}>Login</a>
          <a onClick={() => navigate('/cadastro')}>Cadastro</a>
        </div>
      </nav>

      <header className="banner">
        <h2>Potência e inovação sobre rodas</h2>
        <p>Conheça os principais modelos Honda</p>
      </header>

      <section className="produtos_principal">
        {produtos.map((produto) => (
          <div className="card" key={produto.id}>
            <img src={produto.imagem} alt={produto.nome} />

            <h3>{produto.nome}</h3>

            <p>{produto.preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})}</p>

            <button onClick={() => navigate(`/produto/${produto.id}`)}>Ver Produto</button>
          </div>
        ))}
      </section>

        <footer className='rodape-pag-principal'> © 2026 - Site Honda </footer>
    </div>
  );
}

export default tela_principal;
