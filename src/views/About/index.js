import { Container } from "react-bootstrap";
import { Skills } from "../../components";
import "./index.scss"
const About = () => {
    return <Container fluid>
        <div className="introduction">
            <section>
                <p>Olá,</p>
                <p>eu sou o</p>
                <h1>Eduardo Henrique da Silva</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sem fermentum, aliquet neque sed, fringilla libero.
                    Nunc iaculis volutpat justo, eu egestas est blandit sit amet. Praesent posuere arcu ac felis iaculis, in consectetur justo dignissim.
                    Cras bibendum viverra lectus, at placerat orci porta quis. In hac habitasse platea dictumst. Suspendisse potenti.
                    Praesent pellentesque ipsum lorem, et cursus ligula condimentum vitae.
                </p>
            </section>
            <section>
                <h3>Motivações e objetivos</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sem fermentum, aliquet neque sed, fringilla libero.
                    Nunc iaculis volutpat justo, eu egestas est blandit sit amet. Praesent posuere arcu ac felis iaculis, in consectetur justo dignissim.
                    Cras bibendum viverra lectus, at placerat orci porta quis. In hac habitasse platea dictumst. Suspendisse potenti.
                    Praesent pellentesque ipsum lorem, et cursus ligula condimentum vitae.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sem fermentum, aliquet neque sed, fringilla libero.
                    Nunc iaculis volutpat justo, eu egestas est blandit sit amet. Praesent posuere arcu ac felis iaculis, in consectetur justo dignissim.
                    Cras bibendum viverra lectus, at placerat orci porta quis. In hac habitasse platea dictumst. Suspendisse potenti.
                    Praesent pellentesque ipsum lorem, et cursus ligula condimentum vitae.
                </p>
                <Skills />
            </section>
            <section>
                
            </section>
        </div>
    </Container>
}

export default About;