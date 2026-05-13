import { useState } from "react";
import "./tela_cadastro.css";
import { useNavigate } from 'react-router-dom';

function tela_cadastro() {

  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    alert("Cadastro realizado com sucesso!");

    setFormData({
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      senha: "",
      confirmarSenha: "",
    });
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <div className="logo-area">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg"
            alt="Honda"
            className="logo"
          />

          <h1>Cadastro</h1>
          <p>Crie sua conta para acessar nossos serviços</p>
        </div>

        <form onSubmit={handleSubmit} className="formulario">
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirmar senha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            required
          />

          <button type="submit">Criar Conta</button>
        </form>
      </div>
    </div>
  );
}

export default tela_cadastro;
