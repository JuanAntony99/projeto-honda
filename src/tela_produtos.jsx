import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./tela_produtos.css";

function TELAPRODUTOS() {
  
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    // Busca os dados do produto na API (Porta 3000)
    fetch(`http://localhost:3000/produtos/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Produto não encontrado");
        }
        return res.json();
      })
      .then((data) => setProduto(data))
      .catch((err) => {
        console.error("Erro ao carregar produto:", err);
        setErro(true);
      });
  }, [id]);

  if (erro) {
    return (
      <div className="pagina-error">
        <p>Produto não encontrado ou erro no servidor.</p>
        <button onClick={() => navigate("/")}>← Voltar para a Vitrine</button>
      </div>
    );
  }

  if (!produto) {
    return <p>Carregando detalhes do produto...</p>;
  }

  return (
      <div className="pagina-detalhe" style={{ padding: "20px", textAlign: "center" }}>

      <section className="produtos_prod">
        <div className="card-produtos">
        <button id='back' onClick={() => navigate("/")} style={{ marginBottom: "20px" }}>
          ←
        </button>
          <img src={`/${produto.imagem}`} alt={produto.nome} style={{ maxWidth: "300px" }} />
          
          <h3>{produto.nome}</h3>
          
          <p>
            {produto.preco?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          
          <button onClick={() => alert("Produto adicionado ao carrinho! (Funcionalidade futura)")}>
            Adicionar ao Carrinho
          </button>
        </div>
      </section>
    </div>
  );
}

export default TELAPRODUTOS;
