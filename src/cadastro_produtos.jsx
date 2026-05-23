import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./cadastro_produtos.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useMemo } from "react";

function adm_produtos() {
  const navigate = useNavigate();
  
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [link, setLink] = useState("");
  const [produtos, setProdutos] = useState([]);

  function cadastrarProduto() {
    if (nome === "" || preco === "" || link === "") {
      alert("Preencha todos os campos");
      return;
    }
    const novoProduto = {
      id: Date.now(),
      nome,
      preco,
      imagem: link,
    };
    setProdutos([...produtos, novoProduto]);

    setNome("");
    setPreco("");
    setLink("");

    salvarProduto(novoProduto);
    alert("Cadastro realizado com sucesso!");
  }
   async function excluirProduto(id) {
    try {
        const resposta = await fetch(
          `http://localhost:3000/produtos/${id}`,
          {
            method: "DELETE",
          }
        );

        const dados = await resposta.json();

        if (!resposta.ok) {
          throw new Error(dados.erro || dados.mensagem);
        }

        alert("Produto deletado com sucesso!");
        buscarProdutos();

      } catch (erro) {
        console.error("Erro:", erro.message);
      }
  }

  useEffect(() => {
      buscarProdutos();
    }, []);

  async function buscarProdutos() {
    try {
      const resposta = await fetch("http://localhost:3000/produtos");
      const produtos = await resposta.json();
      setProdutos([]);
      setProdutos(produtos);
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
  }
  async function salvarProduto(produto) {
    try {
      const resposta = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
      });

    //   const dados = await resposta.json();
    //   buscarProdutos();
    //    if (dados.erro != undefined) {
    //      alert("Já existe um produto com esse nome");
    //    }
      } catch (erro) {
        console.error(erro);
      }
  }

  return (
    <>
      <a className="header" href="/">
        <img src="Honda_logo.png"></img>
      </a>
      <div className="box_cadastro">
        <h1>Cadastrar Produtos</h1>
        <p>Preencha as informações dos produtos abaixo</p>
        <br />
        <label htmlFor="nomedoproduto">Digite o nome do produto</label>
        <input
          type="text"
          id="nomedoproduto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="preco">Preço</label>
        <input
          type="text"
          id="preco"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <br />
        <label htmlFor="linkdoproduto">Link do produto</label>
        <input
          type="text"
          id="linkdoproduto"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <p>Cole o link direto da imagem(URL pública)</p>
        <button className="btn_cadastrar" onClick={cadastrarProduto}>
          Cadastrar Produto
        </button>
      </div>
      <div className="box_cadastrados">
        <h1>Produtos Cadastrados</h1>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>PREÇO (R$)</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.nome}</td>
                <td className="preco">R$ {produto.preco}</td>
                <td>
                  <button
                    className="btn_excluirprodutos"
                    onClick={() => excluirProduto(produto.id)}
                  >
                    EXCLUIR
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default adm_produtos;
