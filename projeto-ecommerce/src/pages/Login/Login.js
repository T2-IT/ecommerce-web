import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
//import logo from '../../assets/logoT2.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <div className="container-center">
      <div className="login">

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input type="text" placeholder="Email" value={email} onChange={ (e) => setEmail(e.target.value) }/>
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value) } />
          <Link to="/home">
          <button type="submit">Acessar</button>
          </Link>
        </form>

        <Link to="/register">Criar uma conta</Link>
      </div>
    </div>
  );
}

export default Login;