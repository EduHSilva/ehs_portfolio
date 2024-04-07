import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";
import "./index.scss";

const Header = () => {
  let location = useLocation();
  return (
    <>
      <Navbar sticky="top" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src="/imgs/logo-branco.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav activeKey={location.pathname} className="nav">
              <Nav.Link href="/">Sobre</Nav.Link>
              <Nav.Link href="/projetos">Projetos</Nav.Link>
              <Nav.Link href="#contato">Contato</Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://drive.google.com/file/d/10VENMs46KmJ_yNQzt0jI49tCM4f2ccVG/view?usp=drive_link"
              >
                Currículo
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
