import React from "react";
import Footer from "../Footer";

const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Redes</Footer.Title>
            <Footer.Link href="https://www.linkedin.com/in/vanessa-lopes-798077128/"></Footer.Link>
            <Footer.Link href="https://www.instagram.com/nlo202_/">
              Instagram
            </Footer.Link>
            <Footer.Link href="#">Facebook</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Projetos</Footer.Title>
            <Footer.Link href="https://github.com/NeuVanessa/applicationweb-angular">
              Angular Login
            </Footer.Link>
            <Footer.Link href="https://github.com/NeuVanessa/challenge-marvel-next">
              Marvel Site
            </Footer.Link>
            <Footer.Link href="https://github.com/NeuVanessa/animes-web">
              Animes Site
            </Footer.Link>
            <Footer.Link href="https://github.com/NeuVanessa/Project-Travel">
              Java LP2
            </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contato</Footer.Title>
            <Footer.Link href="#">
              Email: vanessashirlenee_estrela@hotmail.com
            </Footer.Link>
            <Footer.Link href="#">WhatsApp: (071) 98514-8742</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
};

export default FooterContainer;
