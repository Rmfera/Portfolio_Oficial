import styles from "./Presentation.module.css";
import ButtonA from "../elements/ButtonA";
function Presentation() {
  return (
    <div className={styles.Presentation} id="Presentation">
      <h1>
        <strong>Bem-vindo ao meu Portfólio</strong>
      </h1>
      <h2>Olá, eu sou Reinaldo</h2>
      <p>
        Profissional com sólida base técnica em Telecomunicações e Bacharelado
        em Sistemas de Informação. Possui experiência prática como Técnico de
        Desenvolvimento de Produtos, atuando com eletrônica (instrumentação e
        microcontroladores PIC) e testes de software (Web, Mobile e Desktop).
        Recentemente, especializou-se como Desenvolvedor Full-Stack no
        ecossistema JavaScript/TypeScript (React, Next.js e Express.js). Busca
        oportunidades que integrem o desenvolvimento de produtos eletrônicos à
        engenharia de software, ou posições como Desenvolvedor Júnior/Trainee.
      </p>
      <ButtonA
        link="https://www.linkedin.com/in/reinaldomferreira"
        text="Conecte-se Comigo!"
      />
    </div>
  );
}

export default Presentation;
