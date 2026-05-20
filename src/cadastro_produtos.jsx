import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './cadastro_produtos.css'
import { useNavigate } from 'react-router-dom';

function adm_produtos() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [link, setLink] = useState('');
  const [produtos, setProdutos] = useState([]);
  function cadastrarProduto() {

    if(nome === '' || preco === '' || link === ''){
      alert('Preencha todos os campos')
      return;
    }
    const novoProduto = {
      id: Date.now(),
      nome,
      preco,
      link
    }
    setProdutos([...produtos, novoProduto])

    setNome('')
    setPreco('')
    setLink('')
  }
  function excluirProduto(id){
    const novaLista = produtos.filter((produto) => produto.id !== id)

    setProdutos(novaLista)
  }
  return (
    <>
      <div className="header">
        <img src="public/Honda_logo.png" alt="logo" />
        <button onClick={() => navigate('/')}>
          Voltar
        </button>
      </div>
      <div className="box_cadastro">
        <h1>Cadastrar Produtos</h1>
        <p>Preencha as informações dos produtos abaixo</p>
        <br />
        <label htmlFor="nomedoproduto">
          Digite o nome do produto
        </label>
        <input
          type="text"
          id="nomedoproduto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="preco">
          Preço
        </label>
        <input
          type="text"
          id="preco"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <br />
        <label htmlFor="linkdoproduto">
          Link do produto
        </label>
        <input
          type="text"
          id="linkdoproduto"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <p>Cole o link direto da imagem(URL pública)</p>
        <button
          className="btn_cadastrar"
          onClick={cadastrarProduto}
        >
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
                <td className="preco">
                  R$ {produto.preco}
                </td>
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
  )
}
export default adm_produtos
