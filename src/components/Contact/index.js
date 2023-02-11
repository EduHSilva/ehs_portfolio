import { Card, Col, Row } from "react-bootstrap";
const Contact = () => {
    return <Card className="contact" id="contato">
        <Card.Title>
            Contato
        </Card.Title>
        <Card.Body>
            <Row>
            <Col>
                <div className="footer-item">
                    <img src="/imgs/whats.png" alt="Whats" />
                    +55 (16) 99238-8972
                </div>
                <div className="footer-item">
                    <img src="/imgs/email.png" alt="E-mail" />
                    edu.slhenrique@gmail.com
                </div>
            </Col>
            <Col>
                <a className="footer-item" href="https://www.linkedin.com/in/edu-h/" target="_blank" rel="noreferrer"> 
                    <img src="/imgs/linkedin.png" alt="LinkedIN" />Eduardo Silva
                </a>
                <a className="footer-item" href="https://github.com/Eduardo681" target="_blank" rel="noreferrer"> 
                    <img src="/imgs/github.png" alt="Github" />@Eduardo681
                </a>
            </Col>
            </Row>
        </Card.Body>
    </Card>
}

export default Contact;