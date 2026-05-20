import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "./tela_carrinho.css";
import { useMemo } from 'react';
import { useEffect } from "react";

function tela_principal() {
  const [selected, setSelected] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));


    let id = 0;
    let nome = "";

    if (!user || Object.keys(user).length === 0) {
      id = 0;
      nome = "";
    } else {
      id = user.id;
      nome = user.nome;
    }


  
  const [produtos, setDados] = useState([]);

    useEffect(() => {
    if (id != 0){
      buscarProdutos();
    }
  }, []); 
  
    async function buscarProdutos() {
  try {
    const resposta = await fetch(`http://localhost:3000/carrinho/${id}`);

    if (!resposta.ok) {
      setDados([]);
      return;
    }

    const dadosDados = await resposta.json();
    setDados(dadosDados);
    
  } catch (error) {
    console.error("Erro ao buscar os produtos:", error);
    setDados([]);
  }
}

 
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
          <img src='Honda_logo.png'></img>
        </div>

        <div className="user-prod">
          <img className='image-prod' src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
          <h2>{nome}</h2>
        </div>
      </nav>

      <section className="produtos-prod">
        {produtos.length === 0 ? (
          <div className="carrinho-vazio">
            <p>Seu carrinho está vazio. Adicione produtos!</p>
          </div>
        ) : (
          produtos.map((produto) => (
            <div 
              key={produto.id} 
              className={`card-prod ${selected[produto.id] ? "selected" : ""}`} 
              onClick={() => setSelected({...selected, [produto.id]: !selected[produto.id]})}
            >
              <label className="check-prod" onClick={(e) => e.stopPropagation()}>
                <input 
                  type="checkbox" 
                  checked={selected[produto.id] || false} 
                  onChange={() => setSelected({...selected, [produto.id]: !selected[produto.id]})}
                />
                <span></span>
              </label>

              <img src={produto.imagem} alt={produto.nome} />

              <h3>{produto.nome}</h3>

              <p>{produto.preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>
            </div>
          ))
        )}
      </section>

        <footer className='rodape-pag-prod'>
          <h3>Total: <strong>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></h3>

          <button className="btn-continuar-prod" disabled={total === 0} onClick={() => alert("Compra finalizada")}> Continuar </button>
        </footer>
    </div>
  );
}

export default tela_principal;
