import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "./tela_principal.css";
import { useNavigate } from 'react-router-dom';

function tela_principal() {
  
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const produtos = [
    {
      id: 1,
      nome: "Civic Type R",
      preco: "R$ 430.500",
      imagem:
        "Civic Type R.png",
      link: "https://www.honda.com.br/automoveis/civic-typer"
    },
    {
      id: 2,
      nome: "CB500 Hornet",
      preco: "R$ 45.000",
      imagem:
        "CB500 Hornet.png",
      link: "https://www.honda.com.br/motos/street/naked/hornet-500"
    },
    {
      id: 3,
      nome: "Honda HR-V",
      preco: "R$ 214.000",
      imagem:
        "Honda HR-V.png",
      link: "https://www.honda.com.br/automoveis/hrv"
    },
    {
      id: 4,
      nome: "Honda CG160 Titan",
      preco: "R$ 23.000",
      imagem:
        "CG160 Titan.png",
      link: "https://www.honda.com.br/motos/street/city/cg-160-titan"
    },
    {
      id: 5,
      nome: "Honda Accord",
      preco: "R$ 333.000",
      imagem:
        "Accord.png",
      link: "https://www.honda.com.br/automoveis/accord"
    }
    ,
    {
      id: 6,
      nome: "Pop110i ES",
      preco: "R$ 11.000",
      imagem:
        "Pop110i ES.png",
      link: "https://www.honda.com.br/motos/street/city/pop110i-es"
    }
  ];

  return (
    <div className="container">

      <nav className="navbar">
        
        <div className='logo'>
          <img src='logoHonda.png'></img>
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

      <section className="produtos">
        {produtos.map((produto) => (
          <div className="card" key={produto.id}>
            <img src={produto.imagem} alt={produto.nome} />

            <h3>{produto.nome}</h3>

            <p>{produto.preco}</p>

            <button onClick={() => window.open(produto.link, '_blank')}>Ver Produto</button>
          </div>
        ))}
      </section>

        <footer className='rodape-pag-principal'> © 2026 - Site Honda </footer>
    </div>
  );
}

export default tela_principal;
