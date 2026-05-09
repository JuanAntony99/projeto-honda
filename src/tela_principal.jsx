import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "./tela_principal.css";

function tela_principal() {
  const produtos = [
    {
      id: 1,
      nome: "Civic Type R",
      preco: "R$ 430.500",
      imagem:
        "Civic Type R.png"
    },
    {
      id: 2,
      nome: "CB500 Hornet",
      preco: "R$ 45.000",
      imagem:
        "CB500 Hornet.png"
    },
    {
      id: 3,
      nome: "Honda HR-V",
      preco: "R$ 214.000",
      imagem:
        "Honda HR-V.png"
    },
    {
      id: 4,
      nome: "Honda CG160 Titan",
      preco: "R$ 23.000",
      imagem:
        "CG160 Titan.png"
    }
    ,
    {
      id: 5,
      nome: "Honda Accord",
      preco: "R$ 333.000",
      imagem:
        "Accord.png"
    }
    ,
    {
      id: 6,
      nome: "Pop110i ES",
      preco: "R$ 11.000",
      imagem:
        "Pop110i ES.png"
    }
  ];

  return (
    <div className="container">

      <nav className="navbar">
        
        <div className='logo'>
          <img src='logoHonda.png'></img>
        </div>

        <div className="links">
          <a href="#">Home</a>
          <a href="#">Login</a>
          <a href="#">Cadastro</a>
        </div>
      </nav>

      <header className="banner">
        <h2>Potência e inovação sobre rodas</h2>
        <p>Conheça os principais modelos Honda</p>
      </header>

      <section className="produtos">
        {produtos.map((produto) => (
          <div className="card" key={produto.id}>
            <img src={produto.imagem} alt={produto.nome} />

            <h3>{produto.nome}</h3>

            <p>{produto.preco}</p>

            <button>Ver Produto</button>
          </div>
        ))}
      </section>

        <footer className='rodape-pag-principal'> © 2026 - Site Honda </footer>
    </div>
  );
}

export default tela_principal;
