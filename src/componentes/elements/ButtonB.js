import styles from "./ButtonB.module.css";
function ButtonB({ text, link }) {
  return (
    /* Aplique a classe do botão diretamente na tag <a> */
    <a
      href={link}
      className={styles.btn}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}

export default ButtonB;
