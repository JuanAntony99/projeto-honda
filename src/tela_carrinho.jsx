import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "./tela_carrinho.css";
import { useMemo } from 'react';

function tela_principal() {
  const [selected, setSelected] = useState({})
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
  const total = useMemo(() => {
    return produtos.reduce((acc, produto) => {
      if (selected[produto.id]) {
        const apenasNumeros = produto.preco.toString().replace(/\D/g, "");
        const valorNumerico = parseInt(apenasNumeros) || 0;
        return acc + valorNumerico;
      }
      return acc;
    }, 0);
  }, [selected, produtos]);

  return (
    <div className="container-prod">

      <nav className="navbar-prod">
        
        <div className='logo-prod'>
          <img src='logoHonda.png'></img>
        </div>

        <div className="user-prod">
          <img className='image-prod' src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
          <h2>Ismael F.</h2>
        </div>
      </nav>

      <section className="produtos-prod">
        {produtos.map((produto) => (
      <div className={`card-prod ${selected[produto.id] ? "selected" : ""}`} onClick={() => setSelected({...selected,[produto.id]: !selected[produto.id]})}>
            <label className="check-prod" onClick={(e) => e.stopPropagation()}>
              <input type="checkbox" checked={selected[produto.id] || false} onChange={() => setSelected({...selected, [produto.id]: !selected[produto.id]})}/>
              <span></span>
            </label>

            <img src={produto.imagem} alt={produto.nome} />

            <h3>{produto.nome}</h3>

            <p>{produto.preco}</p>
          </div>
        ))}
      </section>

        <footer className='rodape-pag-prod'>
          <h3>Total: <strong>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></h3>

          <button className="btn-continuar-prod" disabled={total === 0} onClick={() => alert("Compra finalizada")}> Continuar </button>
        </footer>
    </div>
  );
}

export default tela_principal;
