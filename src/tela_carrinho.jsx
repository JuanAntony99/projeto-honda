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
      id: 4,
      nome: "Honda CG160 Titan",
      preco: "R$ 23.000",
      imagem:
        "CG160 Titan.png",
      link: "https://www.honda.com.br/motos/street/city/cg-160-titan"
    },
    {
      id: 6,
      nome: "Pop110i ES",
      preco: "R$ 11.000",
      imagem:
        "Pop110i ES.png",
      link: "https://www.honda.com.br/motos/street/city/pop110i-es"
    },
    {
      id: 7,
      nome: "Honda Civic Sedan",
      preco: "R$ 265.900",
      imagem: "Civic Sedan.png",
      link: "https://www.honda.com.br/automoveis/civic-hybrid"
    },
    {
      id: 8,
      nome: "Honda CR-V Advanced",
      preco: "R$ 352.900",
      imagem: "CR-V.png",
      link: "https://www.honda.com.br/automoveis/crv"
    },
    {
      id: 9,
      nome: "CB 1000R Black Edition",
      preco: "R$ 87.730",
      imagem: "CB 1000R.png",
      link: "https://www.honda.com.br/motos/street/naked/cb-1000r"
    },
    {
      id: 10,
      nome: "Honda XRE 300 Sahara",
      preco: "R$ 27.000",
      imagem: "XRE 300.png",
      link: "https://www.honda.com.br/motos/trail/adventure/sahara-300"
    },
    {
      id: 11,
      nome: "Honda Biz 125",
      preco: "R$ 14.970",
      imagem: "Biz 125.png",
      link: "https://www.honda.com.br/motos/street/cub/biz-125"
    },
    {
      id: 12,
      nome: "Honda CRF 1100L Africa Twin",
      preco: "R$ 81.100",
      imagem: "Africa Twin.png",
      link: "https://www.honda.com.br/motos/trail/adventure/africa-twin"
    },  
    {
      id: 13,
      nome: "Honda Civic Type R (2024)",
      preco: "R$ 440.000",
      imagem: "Civic Type R 2024.png",
      link: "https://www.honda.com.br/automoveis/civic-typer"
    },
    {
      id: 14,
      nome: "Honda City Hatchback",
      preco: "R$ 130.000",
      imagem: "City Hatch.png",
      link: "https://www.honda.com.br/automoveis/city-hatchback"
    },
    {
      id: 15,
      nome: "Honda GL 1800 Gold Wing",
      preco: "R$ 304.450",
      imagem: "Gold Wing.png",
      link: "https://www.honda.com.br/motos/trail/touring/gold-wing-tour"
    },
    {
      id: 16,
      nome: "Honda ADV 150",
      preco: "R$ 23.060",
      imagem: "ADV 150.png",
      link: "https://www.honda.com.br/motos/scooter/scooter/adv"
    },
    {
      id: 17,
      nome: "Honda NC 750X DCT",
      preco: "R$ 58.346",
      imagem: "NC 750X.png",
      link: "https://www.honda.com.br/motos/trail/crossover/nc-750x"
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
