import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./Card.css";

function Card() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    async function getProduto() {
      const response = await api.get(`/produto`);
      setProdutos(response.data);
    }

    getProduto();
  }, []);
  console.log(produtos);
  {
    return produtos.map((repository) => {
      return (
        <div>
          <div className="cartao">
            <div>
              <img
                src={repository.url}
                className="img_cartao"
              />
            </div>
            <div>
              <h2 className="titulo_cartao">{repository.nome}</h2>
            </div>
            <div>
              <p className="descricao_cartao">{repository.descricao}</p>
            </div>
            <div>
              <button className="botao_cartao">
                Ver produto
              </button>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default Card;
