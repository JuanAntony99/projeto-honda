import './tela_login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function App() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function login_adm() {

    if (email === "admin@honda.com" && senha === "admin123") {
      navigate("/adminpage");
    } else {
      alert("Email ou senha inválidos");
    }

  }

  return (

    <div className="container">

      <div className="left-side">

        <div className="overlay"></div>

        <div className="content-left">

          <h1>HONDA</h1>

          <p>
            Faça seu login e visite nossa loja.
          </p>

          <div className="infos">

            <div className="card-info">
              <h2>+10.000</h2>
              <span>acessos diarios</span>
            </div>

            <div className="card-info">
              <h2>98%</h2>
              <span>Satisfação</span>
            </div>

          </div>

        </div>

      </div>

      <div className="right-side">

        <div className="login-box">

          <h1>Login</h1>

          <p>
            Entre na sua conta para continuar
          </p>

          <div className="input-group">

            <label>E-mail</label>

            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          <div className="input-group">

            <label>Senha</label>

            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

          </div>

          <div className="options">

            <div className="remember">
              <input type="checkbox" />
              <span>Lembrar senha</span>
            </div>

            <a href="#">Esqueci minha senha</a>

          </div>

          <button className="btn-login" onClick={login_adm}>
            Entrar
          </button>

          <div className="register">
            <span>Não possui conta?</span>

            <a
              onClick={() => navigate('/cadastro')}
              style={{ cursor: 'pointer' }}
            >
              Registrar
            </a>

          </div>

        </div>

      </div>

    </div>
  )
}

export default App