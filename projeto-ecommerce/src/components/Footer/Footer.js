import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import logo from "../../Imagem/Logo-tudo2.png";
import { Container, ContainerLinks, Redes, FooterDiv , Hr} from "./Styles";

function Footer() {
  return (
    <FooterDiv>
      <div>
        <div>
          <div>
            <Container>
              <img src={logo} alt="Tudo2" />
            </Container>
            <Hr/>

            <Container>
              <ContainerLinks>
                <Redes href="https://www.instagram.com">
                  <AiOutlineInstagram /> Tudo Dois
                </Redes>
              </ContainerLinks>
              <ContainerLinks>
                <Redes href="https://github.com/jgreis/residencia-frontend">
                  <AiFillGithub /> GitHub
                </Redes>
              </ContainerLinks>
              <ContainerLinks>
                <Redes href="https://www.linkedin.com/company/serratecoficial/">
                  <ImLinkedin /> Linkedin
                </Redes>
              </ContainerLinks>
            </Container>

            <Container>
              <p>
                Brasil
                <br />
                R. Afrânio Melo Franco, 333 – 313
                <br />
                Quitandinha
                <br />
                Petrópolis – RJ, 25651-000
              </p>
            </Container>
          </div>
        </div>
      </div>
    </FooterDiv>
  );
}

export default Footer;
