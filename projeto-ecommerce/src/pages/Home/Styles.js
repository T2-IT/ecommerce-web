import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  text-align: center;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const Hr = styled.hr`
  margin: 1rem 0;
  color: inherit;
  background-color: black;
  border: 0;
  opacity: 0.25;
  height: 1px;
`;

export const ImagemHome = styled.img`
  width: 100%;
  justify-content: start;
  top: 0;
`;

export const ButtonProduto = styled.button`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  background-color: black;
  color: white;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;

  &:hover {
    transition: 300ms;
    background-color: rgb(71, 71, 71);
    box-shadow: 2px 2px 5px rgb(0, 0, 0);
  }
`;

export const P = styled.p`
  font-size: 1.5rem;
`;

export const ImagemFundo = styled.img`
  width: 621px;
  height: 462px;
  vertical-align: middle;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 2px 10px;
    transition: 300ms;
  }
`;
