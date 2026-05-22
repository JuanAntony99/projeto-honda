import React from "react";
import "./AdminPage.css";

export default function AdminPage() {
  const administrarUsuarios = () => {
    alert("Abrir painel de usuários");
  };

  const administrarProdutos = () => {
    alert("Abrir painel de produtos");
  };

  return (
    <div className="contain">
      <nav className="navbar-admin">
        <div className="logo-admin">
          <img src="logoHonda.png"></img>
        </div>

        <div className="links-admin">
          <a href="#">Home</a>
          <a href="#">Login</a>
          <a href="#">Cadastro</a>
        </div>
      </nav>

      <div className="container_adm">
        <div className="card-admin">
          <h1 className="title">Painel Administrativo</h1>

          <div className="button-container">
            <button className="btn usuarios" onClick={administrarUsuarios}>
              Administrar Usuários
            </button>

            <button className="btn produtos" onClick={administrarProdutos}>
              Administrar Produtos
            </button>
          </div>
        </div>
      </div>

      <footer className="rodape-pag-principal">© 2026 - Site Honda</footer>
    </div>
  );
}
