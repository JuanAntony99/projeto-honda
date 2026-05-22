import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./tela_produtos.css";

function TELAPRODUTOS() {
  const user = JSON.parse(localStorage.getItem("user"));

  let id_cliente = 0;

  if (!user || Object.keys(user).length === 0) {
    id_cliente = 0;
  } else {
    id_cliente = user.id;
  }

  const { id } = useParams(); // ID do produto vindo da URL da página de detalhes
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);
  const [erro, setErro] = useState(false);

  async function adicionarAoCarrinho(idProduto) {
    // CORREÇÃO 1: Mudado de 'id' para 'id_cliente' para checar o usuário logado
    if (id_cliente === 0) {
      alert("Faça login para adicionar produtos ao carrinho!");
      return;
    }

    try {
      const resposta = await fetch(`http://localhost:3000/carrinho`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // CORREÇÃO 2: Enviando todos os dados que o seu back-end (req.body) espera receber
        body: JSON.stringify({
          id_usuario: id_cliente, // Seu back espera 'id_usuario'
          id_produto: idProduto, // ID do produto que foi passado por parâmetro
          qtde: 1, // Quantidade padrão inicial
        }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        alert("Produto adicionado com sucesso!");
      } else {
        alert(`Aviso: ${dados.erro || "Não foi possível adicionar"}`);
      }
    } catch (error) {
      console.error("Erro ao conectar com o servidor:", error);
      alert("Erro na conexão com o servidor.");
    }
  }

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
    <div
      className="pagina-detalhe"
      style={{ padding: "20px", textAlign: "center" }}
    >
      <section className="produtos_prod">
        <div className="card-produtos">
          <button
            id="back"
            onClick={() => navigate("/")}
            style={{ marginBottom: "20px" }}
          >
            ←
          </button>
          <img
            src={`/${produto.imagem}`}
            alt={produto.nome}
            style={{ maxWidth: "300px" }}
          />

          <h3>{produto.nome}</h3>

          <p>
            {produto.preco?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>

          <button onClick={() => adicionarAoCarrinho(id)}>
            Adicionar ao Carrinho
          </button>
        </div>
      </section>
    </div>
  );
}

export default TELAPRODUTOS;
