import React from "react";
import './Card.css'

function Cartao(props){
  return(
    <div>
      <div className="cartao" >
        <img src={props.img}
        class="img_cartao" />
        <h2 className="titulo_cartao">
          {props.titulo}
        </h2>
        <p className="descricao_cartao">
          {props.descricao}
        </p>
        <button onclick="myFunction()" className="botao_cartao">
        Vai Pro Produto</button>
      </div>
      
    </div>
  );
}

function Card() {
  return (
    <div className="Card">
        <Cartao 
        titulo="Fluzão" /*conforme o texto aumenta, o card tbm, AJEITAR*/
        img="https://cdn.awsli.com.br/600x450/954/954937/produto/43821322/068be6bec1.jpg"
        descricao="sou do clube tantas vezes campeão"
        />
        <Cartao 
        titulo="Tricolor"
        img="https://cdn.awsli.com.br/600x450/954/954937/produto/43821322/068be6bec1.jpg"
        conteudo="jdefkeefjekfebekfejfkfweiew
        fefewifjfeuefjrgijrjgerhrjsz
        vshvufjuvhisvbhvrigegstjsyr"
        descricao="sou tricolor de coração"
        />
        <Cartao 
        titulo="Flu"
        img="https://cdn.awsli.com.br/600x450/954/954937/produto/43821322/068be6bec1.jpg"
        descricao="Dom Fredom"
        />
    

    </div>
  );
}

//ReactDOM.render(<Card />, document.getElementById("root"));
export default Card;