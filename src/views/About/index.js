import "./index.scss";

const About = () => {
    return (
        <div className="content-container">
            <div className="introduction">
                <div className="subtitle">
                    <h5>Introdução</h5>
                </div>
                <div>
                    <section>
                        <br/>
                        <h5>
                            Bem-vindo ao meu portfólio! Me chamo Eduardo Henrique da Silva.
                        </h5>
                        <br/>
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
                            Sou um profissional dedicado e apaixonado pela área de tecnologia,
                            com uma sólida formação acadêmica e experiência prática em desenvolvimento
                            de aplicações. Meu background inclui uma pós-graduação em Ciência de Dados
                            e Machine Learning, além de um bacharelado em Engenharia de Software,
                            proporcionando-me um entendimento teórico e prático das complexidades do
                            mundo da tecnologia.
                        </p>
                        <p>
                            Este portfólio é uma representação do meu trabalho, destacando projetos nos
                            quais estive envolvido, demonstrando minha capacidade de aplicar conhecimentos
                            teóricos em situações do mundo real e destacando minhas conquistas até o momento.
                            Estou animado para compartilhar minha jornada e colaborar em projetos que impulsionem
                            a inovação e o progresso na área de tecnologia. Obrigado por visitar, e espero que você
                            desfrute da experiência ao explorar meu portfólio.
                        </p>
                    </section>
                </div>
            </div>
            <div className="introduction">
                <div className="subtitle">
                    <h5>Formação acadêmica</h5>
                </div>
                <div>
                    <section>
                        <br/>
                        <ul>
                            <li>
                                Especialização em Ciência de Dados e Machine Learning
                                - PUC Campinas (2022-2023)
                            </li>
                            <li>
                                Bacharel em Engenharia de Software
                                - Uni-FACEF (2019-2022)
                                <span> - Honra de melhor aluno</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
            <div className="introduction">
                <div className="subtitle">
                    <h5>Experiências profissionais</h5>
                </div>
                <div>
                    <section>
                        <br/>
                        <ul>
                            <li>Analista de Sistemas - Joycar (2021 - atual)</li>
                            <li>Auxiliar de Tecnologia - Rochfer (junho de 2020 – fevereiro de 2021)</li>
                        </ul>
                    </section>
                </div>
            </div>
            <div className="introduction">
                <div className="subtitle">
                    <h5>Principais habilidades</h5>
                </div>
                <div>
                    <section>
                        <br/>
                        <div className="two">
                            <div>
                                <p>
                                    Minhas principais habilidades incluem pensamento crítico e comunicação efetiva,
                                    aplicados ao levantamento e refinamento de requisitos diretamente com clientes e
                                    equipes de desenvolvimento. Tenho ampla experiência em atuar em todas as etapas do
                                    ciclo de vida de uma solução, desde a concepção até a sustentação e melhorias contínuas.
                                </p>
                                <p>
                                    Minhas experiências profissionais abrangem projetos com diversas stacks tecnológicas.
                                    Durante minha atuação, fui responsável pelo desenvolvimento fullstack utilizando
                                    Java (GWT/Spring) no backend, Android nativo com Java e Swift para iOS. No front-end,
                                    trabalhei com HTML, CSS e JavaScript, além de ferramentas para automação de testes,
                                    como Selenium e AWS Device Farm. Também explorei serviços AWS, como CodePipeline para
                                    CI/CD e CloudWatch para monitoramento.
                                </p>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        HTML e CSS <span className="badge advanced">Avançado</span>
                                    </li>
                                    <li>
                                        Git <span className="badge advanced">Avançado</span>
                                    </li>
                                    <li>
                                        Java <span className="badge advanced">Avançado</span>
                                    </li>
                                    <li>
                                        SQL <span className="badge advanced">Avançado</span>
                                    </li>
                                    <li>
                                        Spring <span className="badge intermediate">Intermediário</span>
                                    </li>
                                    <li>
                                        JavaScript <span className="badge intermediate">Intermediário</span>
                                    </li>
                                    <li>
                                        Python <span className="badge intermediate">Intermediário</span>
                                    </li>
                                    <li>
                                        AWS <span className="badge intermediate">Intermediário</span>
                                    </li>
                                    <li>
                                        Documentação de software <span className="badge intermediate">Intermediário</span>
                                    </li>
                                    <li>
                                        Automação de testes <span className="badge intermediate">Intermediário</span>
                                    </li>
                                    <li>
                                        PHP <span className="badge basic">Básico</span>
                                    </li>
                                    <li>
                                        Golang <span className="badge basic">Básico</span>
                                    </li>
                                    <li>
                                        Linux <span className="badge basic">Básico</span>
                                    </li>
                                    <li>
                                        Docker <span className="badge basic">Básico</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;
