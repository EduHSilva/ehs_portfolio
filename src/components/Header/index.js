import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./index.css";
import {
    useLocation,
  } from "react-router-dom";

  
const Header = () => {
    let location = useLocation();
    console.log(location.pathname)
        return <>
        <Navbar sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <img src="/imgs/logo-branco.png" alt='Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav activeKey={location.pathname} className="nav">
                        <Nav.Link href="/sobre">Sobre</Nav.Link>
                        <Nav.Link href="/projetos">Projetos</Nav.Link>
                        <Nav.Link href="#contato">Contato</Nav.Link>
                        <Nav.Link href="#curriculo">Currículo</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default Header;