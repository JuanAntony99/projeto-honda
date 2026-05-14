import './tela_login.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();

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
            <input type="email" placeholder="Digite seu e-mail" />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />
          </div>

          <div className="options">

            <div className="remember">
              <input type="checkbox" />
              <span>Lembrar senha</span>
            </div>

            <a href="#">Esqueci minha senha</a>

          </div>

          <button className="btn-login" onClick={() => navigate('/')}>
            Entrar
          </button>

          <div className="register">
            <span>Não possui conta?</span>
            <a onClick={() => navigate('/cadastro')} style={{ cursor: 'pointer' }}> Registrar</a>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App