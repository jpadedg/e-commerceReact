import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './index.scss'

const Login = () => {
  return (
    <section className="login">
      <Header/>

      <form className="login__form" action="">
        <h1>Acesse com seu Login ou cadastre-se!</h1>
        <h2>você pode entrar com seu CPF</h2>

        <div className="login__input-wrapper">
          <label htmlFor="name">Digite seu CPF:</label>
          <input 
            type="text"
            placeholder="Digite seu CPF"
            id="name"
            className="login__input-name"
          />
          <label htmlFor="password">Senha</label>
          <input 
            type="password"
            id="password" 
            placeholder="*****************"
            className="login__input-senha"
          />
          <button type="submit" className="login__button">
            <Link to={"/home"}>Entrar!</Link>
          </button>
        </div>

      </form>
    </section>
  )
}

export default Login