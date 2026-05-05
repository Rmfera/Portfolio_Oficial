import styles from "./Skills.module.css";
import html from "../../image/skills/html.svg";
function Skills() {
  return (
    <div className={styles.Skills} id="Skills">
      <h2> Habilidades </h2>
      <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
      <div>
        <img
          src="https://skillicons.dev/icons?i=vscode"
          alt="Vs Code"
          title="Visual Studio Code"
        />
        <img src={html} alt="logo-html5" title="HTML5" />
        <img
          src="https://skillicons.dev/icons?i=css"
          alt="logo-CSS3"
          title="CSS3"
        />
         <img
          src="https://skillicons.dev/icons?i=bootstrap"
          alt="logo-bootstrap"
          title="Bootstrap"
        />
        <img
          src="https://skillicons.dev/icons?i=js"
          alt="logo-Linguagem-javascript"
          title="Linguagem JavaScript"
        />
        <img
          src="https://skillicons.dev/icons?i=ts"
          alt="logo--Linguagem-typescript"
          title="Linguagem TypeScript"
        />
        <img
          src="https://skillicons.dev/icons?i=react"
          alt="logo-react"
          title="React"
        />
        <img
          src="https://skillicons.dev/icons?i=vite"
          alt="logo-vite"
          title="Vite"
        />
        <img
          src="https://skillicons.dev/icons?i=next"
          alt="logo-next"
          title="Next.js"
        />
        <img
          src="https://skillicons.dev/icons?i=nodejs"
          alt="logo-node.js"
          title="Node.js"
        />
        <img
          src="https://skillicons.dev/icons?i=expressjs"
          alt="logo-express.js"
          title="Express.js"
        />
        <img
          src="https://skillicons.dev/icons?i=postgres"
          alt="logo-postgres"
          title="Banco de dados Postgresql"
        />
        <img
          src="https://skillicons.dev/icons?i=sqlite"
          alt="logo-sqlite"
          title="Banco de dados Sqlite"
        />
        <img
          src="https://skillicons.dev/icons?i=postman"
          alt="logo-postman"
          title="Postman"
        />
        <img
          src="https://skillicons.dev/icons?i=jest"
          alt="logo-jest"
          title="Framework de testes Jest"
        />
        <img
          src="https://skillicons.dev/icons?i=git"
          alt="logo-git"
          title="Git"
        />
        <img
          src="https://skillicons.dev/icons?i=github"
          alt="logo-github"
          title="Github"
        />
        <img
          src="https://skillicons.dev/icons?i=c"
          alt="logo-linguagem-C"
          title="Linguagem C"
        />
        <img
          src="https://skillicons.dev/icons?i=java"
          alt="logo-linguagem-Java"
          title="Linguagem Java"
        />
      </div>
    </div>
  );
}

export default Skills;
