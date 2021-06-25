import React, { useState } from "react";
import {
  Input,
  Form,
  Container,
  Button,
  ContainerInput,
  ContainerEspaco,
  Header,
} from "./Styles";
import api from "../../services/api";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Cadastro() {
  // async function handleSubmit() {
  //   await api.post("/clientes", {
  //     nomeCompleto: `${document.getElementById("nome").value}`,
  //     senha: `${document.getElementById("senha").value}`,
  //     usuario: `${document.getElementById("usuario").value}`,
  //     cpf: `${document.getElementById("cpf").value}`,
  //     email: `${document.getElementById("email").value}`,
  //   });
  // }

  const [cliente, setCliente] = useState({
    senha: "",
    email: ""
  });

  function handleSenha(event) {
    const qualquerNome = { ...cliente };
    qualquerNome.senha = event.target.value;
    setCliente(qualquerNome);
  }

  function handleEmail(event) {
    const qualquerNome = { ...cliente };
    qualquerNome.email = event.target.value;
    setCliente(qualquerNome);
  }

  async function handleSDHS(event) {
    event.preventDefault();
    console.log(cliente);
    await api.post("/clientes", cliente);
  }

  return (
    <Container>
      <Header>
        <Link to="/">
          <IoArrowBackOutline size={30} />
          <span>Voltar</span>
        </Link>
      </Header>
      <ContainerEspaco>
        <Form onSubmit={(event) => handleSDHS(event)}>
          <h1>Criar conta</h1>
          <Input
            type="text"
            placeholder="Email"
            id="email"
            onChange={(event) => handleEmail(event)}
          />
          <Input
            type="password"
            placeholder="Senha"
            id="senha"
            onChange={(event) => handleSenha(event)}
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
