import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  position: fixed;
  text-align: center;
  flex: 0 0 auto;
  width: 100%;
  position: relative;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
export const ContainerLinks = styled.div`
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
`;
export const Redes = styled.a`
  color: white;
  align-content: center;
  &:hover {
    color: rgb(177, 173, 173);
    text-decoration: none;
  }
`;
export const FooterDiv = styled.div`
  color: white;
  background-color: black;
  padding-top: 3em;
  position: relative;
  bottom: 0;
  width: 100%;
`;

export const Hr = styled.hr`
  margin: 1rem 0;
  color: inherit;
  background-color: white;
  border: 0;
  opacity: 0.25;
  height: 1px;
`;
