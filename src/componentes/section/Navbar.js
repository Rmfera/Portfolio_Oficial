import styles from "./Navbar.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
function Navbar() {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <Nav.Link href="#Presentation">Apresentação</Nav.Link>
        </li>
        <li>
          <Nav.Link href="#Skills">Habilidades</Nav.Link>
        </li>
        <li>
          <Nav.Link href="#Projects">Projetos</Nav.Link>
        </li>
         <li>
          <Nav.Link href="#Contacts">Meus Contatos</Nav.Link>
        </li>
      </ul>
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
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
             title="Meu Linkedin"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
