import React, { useState, useEffect } from "react";
import { Container, Hr, ImagemHome, ButtonProduto } from "./Styles";
import { Link } from "react-router-dom";
import api from "../../services/api";

function Home() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    async function getProduto() {
      const response = await api.get(`/produto`);

      setProdutos(response.data);
    }

    getProduto();
  }, []);

  //  async function deleteProduct (id) {
  //     await api.delete(`/produto/${id}`)
  //     const productFilter = produtos.filter(x => x.id !== id)
  //     setProdutos(productFilter)
  //  }

  return (
    <div>
      <ImagemHome
        src="https://images6.alphacoders.com/749/749388.jpg"
        alt="fotoHome"
      />
      <Container>
        <h1>Home</h1>
      </Container>
      <Hr />
      <Container>
        <p>Site focado na venda de itens esportivos e totalmente limitados.</p>
      </Container>
      <Container>
        <Link to="/produtos">
          <ButtonProduto>Ver produtos</ButtonProduto>
        </Link>
      </Container>
    </div>
  );
}

export default Home;

// Alteração Anna

// import React from "react";
// import './Home.css'
// import Cartao from '../../components/card/Card'

// function Home(){
//   return( 
//     <div>
//       <a>
//       <font size="10">Esse é uma fonte de tamanho 5</font>
//       </a>
//     <Cartao style="width: 100px;"/como mexer no CSS?/
//     />
//     </div>
//   );
// }

// export default Home;
