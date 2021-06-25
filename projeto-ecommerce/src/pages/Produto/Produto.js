import React from "react";
import Card from "../../components/card/Card";
import { Container, Hr , ContainerCard } from "./Styles";

function Produto() {
  return (
    <Container>
      <Container>
        <h1>Produtos</h1>
      </Container>
      <Hr />
      <ContainerCard>
        <Card />
      </ContainerCard>
    </Container>
  );
}

export default Produto;
