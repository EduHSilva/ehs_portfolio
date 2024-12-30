import "./index.scss";

const Footer = () => {
    return <footer id="contato">
        <div className="grey">
            <div>
                <a className="footer-item" href="https://www.linkedin.com/in/edu-h/" target="_blank" rel="noreferrer">
                    <img src="/imgs/linkedin.svg" alt="LinkedIN"/>Eduardo Silva
                </a>
                <a className="footer-item" href="https://github.com/EduHSilva" target="_blank" rel="noreferrer">
                    <img src="/imgs/github.svg" alt="Github"/>@EduHSilva
                </a>
            </div>
            <div>
                <span className="footer-item">
                    <img src="/imgs/whats.svg" alt="Whats"/>
                    +55 (16) 99238-8972
                </span>
                <span className="footer-item">
                    <img src="/imgs/email.svg" alt="E-mail"/>
                    edu.slhenrique@gmail.com
                </span>
            </div>
        </div>
    </footer>
}

export default Footer;