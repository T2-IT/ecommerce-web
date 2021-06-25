import { useState } from "react";
import { Input, Form, Container, Button , ContainerInput , ContainerEspaco} from "./Styles";

function Cadastro() {
  const [nome, setNome] = useState("");

  const [CPF, setCpf] = useState("");
  const [date, setData] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [CEP, setCEP] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [referencia, setReferencia] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    
    <Container>
      <ContainerEspaco>
      
          <Form onSubmit={handleSubmit}>
            <h1>Criar conta</h1>
            <Input
              type="text"
              placeholder="Nome Completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <Input
              type="string"
              placeholder="CPF"
              value={CPF}
              onChange={(e) => setCpf(e.target.value)}
            />
            <Input
              type="date"
              placeholder="Data de Nascimento"
              value={date}
              onChange={(e) => setData(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirmar senha"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Input
              type="text"
              placeholder="CEP"
              value={CEP}
              onChange={(e) => setCEP(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Número"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Ponto de referência"
              value={referencia}
              onChange={(e) => setReferencia(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
           <Container>
              <Button type="submit">Criar conta</Button>
              </Container>
          </Form>
          </ContainerEspaco>
    </Container>
   
  );
}

export default Cadastro;
