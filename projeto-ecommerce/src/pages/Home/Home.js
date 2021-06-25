import React, { useState, useEffect } from "react";
import {
  Container,
  Hr,
  ImagemHome,
  ButtonProduto,
  P,
  ImagemFundo,
} from "./Styles";
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
        src="https://img.wallpapersafari.com/desktop/1440/900/38/68/SEyFka.jpg"
        alt="fotoHome"
      />
      <Container>
        <h1>Home</h1>
      </Container>
      <Hr />
      <Container>
        <P>Site focado na venda de itens esportivos e totalmente limitados.</P>
        <br />
        <P>
          Loja para quem muda o jogo, quem só faz parte e para quem ainda dará
          seus primeiros toques em uma bola.
          <br /> É a comunidade que está melhorando e levando o esporte para o
          futuro.
        </P>
      </Container>
      <Container>
        <Link to="/produtos">
          <ButtonProduto>Ver produtos</ButtonProduto>
        </Link>
      </Container>
      <Container>
        <h1>Boxe</h1>
      </Container>
      <Container>
        <ImagemFundo src="https://s2.glbimg.com/kDxPLJQ6IPVeKdqM_YTXUzdu2jE=/i.glbimg.com/og/ig/infoglobo1/f/original/2019/02/25/muhammadali.jpg" />
        <ImagemFundo src="https://www.teahub.io/photos/full/342-3423863_muhammad-ali-wallpaper-images-muhammad-ali-high-resolution.jpg" />
      </Container>
      <Container>
        <h1>Futebol</h1>
      </Container>
      <Container>
        <ImagemFundo src="https://wallpapercave.com/wp/wp3005559.jpg" />
        <ImagemFundo src="https://efemeridesdoefemello.files.wordpress.com/2016/01/29jan16b.jpg" />
      </Container>
      <Container>
        <h1>Handball</h1>
      </Container>
      <Container>
        <ImagemFundo src="https://wallpaperaccess.com/full/1900949.jpg" />
        <ImagemFundo src="https://geoffwnjwilson.files.wordpress.com/2018/05/handball-2.png?w=768" />
      </Container>
      <Container>
        <h1>Basketball</h1>
      </Container>
      <Container>
        <ImagemFundo src="https://bstatic.epicbuzzer.com/uploads/2020/02/be3c-iewtemz2082092.jpg" />
        <ImagemFundo src="https://boston.cbslocal.com/wp-content/uploads/sites/3859903/2013/03/lebron-dunk-terry.jpg?w=640" />
      </Container>
    </div>
  );
}

export default Home;
