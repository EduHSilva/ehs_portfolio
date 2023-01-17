import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"
const About = () => {
    return <Container fluid>
        about
        <Link to={"/projetos"}>
                <span>projetos</span>
        </Link>
    </Container>
}

export default About;