import styles from "./Footer.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className={styles.Footer} id="Contacts">
      <h2> Meus Contatos </h2>
      <section>
        <p>
          <strong>Email:</strong> reinaldo.mferreira@yahoo.com.br
        </p>
        <p>
          {" "}
          <strong>Nome:</strong> Reinaldo M. Ferreira ©{" "}
          {new Date().getFullYear()}
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/Rmfera"
              target="_blank"
              rel="noopener noreferrer"
              title="Meu Github"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/reinaldomferreira"
              target="_blank"
              rel="noopener noreferrer"
              title="Meu Linkedin"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Footer;
