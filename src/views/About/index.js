import { Container } from "react-bootstrap";
import { Skills } from "../../components";
import "./index.scss";

const About = () => {
  return (
    <Container fluid>
      <div className="introduction">
        <section>
          <p>Oi, eu sou o Edu!</p>
          <p>
            Bem-vindo ao meu portfólio! Sou um profissional dedicado e
            apaixonado pela área de tecnologia, com uma sólida formação
            acadêmica e experiência prática em desenvolvimento de aplicações.
            Meu background inclui uma pós-graduação em Data Science/Machine
            Learning e um bacharelado em Engenharia de Software,
            proporcionando-me um sólido entendimento teórico e prático das
            complexidades do mundo da tecnologia.
          </p>
          <p>
            Tenho um objetivo claro: tornar-me um especialista na área de
            tecnologia, concentrando meus esforços no desenvolvimento de
            habilidades específicas tanto no desenvolvimento backend quanto na
            análise de dados. Estou em busca de oportunidades que me permitam
            aprimorar minhas habilidades e adquirir experiência prática em um
            ambiente desafiador e estimulante. Meu foco está em cultivar um
            conjunto de habilidades robusto e, eventualmente, buscar
            certificações que validem minha expertise.
          </p>
          <p>
            Este portfólio é uma representação do meu trabalho, destacando
            projetos nos quais estive envolvido, demonstrando minha capacidade
            de aplicar conhecimentos teóricos em situações do mundo real e
            destacando minhas conquistas até o momento. Estou animado para
            compartilhar minha jornada e colaborar em projetos que impulsionem a
            inovação e o progresso na área de tecnologia. Obrigado por visitar e
            espero que você desfrute da experiência ao explorar meu portfólio.
          </p>
          <Skills />
        </section>
      </div>
    </Container>
  );
};

export default About;
