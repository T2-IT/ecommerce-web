import styled from "styled-components";

export const Input = styled.input`
  margin: 15px;
  height: 75px;
  border: 0;
  border-radius: 7px;
  font-size: 15px;
  background-color: #fff;
  padding: 2rem;
  width: 100%;
`;

export const Form = styled.form`
  margin-top: 1.5em;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e1e1e1;
  flex-direction: column;
  padding: 5rem;
  width: 100%;
`;

export const Button = styled.button`
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

export const ContainerInput = styled.div`
  margin-bottom: 15px;
  height: 35px;
  border: 0;
  border-radius: 7px;
  padding: 10px;
  font-size: 15px;
  background-color: #fff;
`;
export const ContainerEspaco = styled.div`
  justify-content: center;
  width: 60%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: 0.2s;

    &:hover {
      color: #666;
    }
  }
`;
