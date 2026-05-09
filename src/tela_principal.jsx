import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "./tela_principal.css";

function tela_principal() {
  const produtos = [
    {
      id: 1,
      nome: "Honda Civic",
      preco: "R$ 180.000",
      imagem:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d"
    },
    {
      id: 2,
      nome: "Honda CB 500",
      preco: "R$ 45.000",
      imagem:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39"
    },
    {
      id: 3,
      nome: "Honda HR-V",
      preco: "R$ 160.000",
      imagem:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },
    {
      id: 4,
      nome: "Honda Titan 160ES",
      preco: "R$ 23.000",
      imagem:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    }
    ,
    {
      id: 5,
      nome: "Honda Pop110i",
      preco: "R$ 23.000",
      imagem:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    }
    ,
    {
      id: 6,
      nome: "Honda Pop110i",
      preco: "R$ 23.000",
      imagem:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    }
  ];

  return (
    <div className="container">

      <nav className="navbar">
        
        <div className='logo'>
          <img src='logo-honda.jpg'></img>
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

        <footer> @Honda</footer>
    </div>
  );
}

export default tela_principal;
