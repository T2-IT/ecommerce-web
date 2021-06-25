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

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
`;
