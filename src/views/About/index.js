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
                    Tenho 22 anos e sou um aprendiz constante. Encantado com as melhorias de vida e agilidade que a tecnologia pode nós proporcionar,
                    atuo no mercado de desenvolvimento de aplicações web e mobile a 4 anos sempre buscando automatizar processos problematicos, aprender com a equipe
                    e contribuir para que os objetivos sejam atingidos.
                </p>
                <p>
                    Faço pós graduação em DataScience e Machine Learning, área à qual me apaixonei durante a graduação.
                    Sou formado em Engenharia de Software pela UNI-FACEF e também possuo tecnólogo em contabilidade.
                </p>
                <p>
                    Atualmente, trabalho em uma Start-up que vem contribuindo para que eu seja um profissional ágil, com alta adaptabilidade e apto a trabalhar em equipe.
                    Além disso em trabalhos anteriores adquiri experiencia no desenvolvimento e manutenção de sistemas ERP e E-Commerce.
                </p>
            </section>
            <section>
                <h4>Motivações e objetivos</h4>
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
        </div>
    </Container>
}

export default About;