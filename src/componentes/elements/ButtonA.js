import styles from "./ButtonA.module.css";

function ButtonA({ text, link }) {
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

export default ButtonA;
