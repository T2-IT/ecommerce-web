import { useState } from 'react';
import { Link } from 'react-router-dom';
import './cadastro.css';

//import logo from '../../assets/logoT2.svg';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [CPF, setCpf] = useState('');
    const [date, setData] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const [CEP, setCEP] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [referencia, setReferencia] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <div className="container-center">
      <div className="cadastro">

        <form onSubmit={handleSubmit}>
          <h1>Criar conta</h1>
          <input type="text" placeholder="Nome" value={nome} onChange={ (e) => setNome(e.target.value) }/>
          <input type="text" placeholder="Sobrenome" value={sobrenome} onChange={ (e) => setSobrenome(e.target.value) }/>
          <input type="string" placeholder="CPF" value={CPF} onChange={ (e) => setCpf(e.target.value) }/>
          <input type="date" placeholder="Data de Nascimento" value={date} onChange={(e) => setData(e.target.value) } />
          <input type="text" placeholder="Usuário" value={usuario} onChange={ (e) => setUsuario(e.target.value) }/>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value) } />
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value) } />
          <input type="password" placeholder="Confirmar senha" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value) } />


          <input type="text" placeholder="CEP" value={CEP} onChange={ (e) => setCEP(e.target.value) }/>
          <input type="text" placeholder="Rua" value={rua} onChange={ (e) => setRua(e.target.value) }/>
          <input type="text" placeholder="Número" value={numero} onChange={ (e) => setNumero(e.target.value) }/>
          <input type="text" placeholder="Complemento" value={complemento} onChange={ (e) => setComplemento(e.target.value) }/>
          <input type="text" placeholder="Ponto de referência" value={referencia} onChange={ (e) => setReferencia(e.target.value) }/>
          <input type="text" placeholder="Bairro" value={bairro} onChange={ (e) => setBairro(e.target.value) }/>
          <input type="text" placeholder="Cidade" value={cidade} onChange={ (e) => setCidade(e.target.value) }/>
          <input type="text" placeholder="Estado" value={estado} onChange={ (e) => setEstado(e.target.value) }/>


          <button type="submit">Criar conta</button>
        </form>

       {/*<Link to="/register">Criar uma conta</Link>*/}
      </div>
    </div>
  );
}

export default Cadastro;