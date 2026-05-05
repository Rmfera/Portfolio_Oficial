import styles from "./Projects.module.css";
import Card from "../elements/Card";
import my_sales from "../../image/projects/my_sales.png";
import prv from "../../image/projects/portfolio-react-vite.png";
import salesDashboard from "../../image/projects/dnc-sales-dashboard-rmf.png";
import dncWheather from "../../image/projects/DncWheather.png";
import cm from "../../image/projects/Community-Library.png";
import flp from "../../image/projects/file-management-project.png";
import sgm from "../../image/projects/student-grade-manager.png";

function Projects() {
  return (
    <div className={styles.Projects} id="Projects">
      <h2> Projetos </h2>
      <section>
        <Card
          img={my_sales}
          title="My Sales"
          tech="Node.js, Express, TypeScript, PostgreSQL, TypeORM, Tsyringe, Zod, Bcrypt, JWT, Redis, Docker Desktop, Jest, dotenv, etc."
          description="Desenvolvimento de uma API de Vendas de produtos que permite as seguintes operações: cadastrar, buscar, editar e deletar usuários, clientes, produtos e pedidos. Sendo que algumas rotas estão protegidas e senhas criptografadas."
          repo="https://github.com/Rmfera/my_sales"
          // site="https://www.google.com"
        />
        <Card
          img={cm}
          title="Community Library"
          tech="Node.js, Express, JavaScript, Sqlite3, Zod, Moment, Node-cron, Nodemailer, Nodemon, Bcrypt, JWT, dotenv, etc."
          description="Este é um projeto de uma API de uma biblioteca comunitária onde os usuários podem postar livros para compartilhar com outros usuários e também emprestar livros de outros membros da comunidade."
          repo="https://github.com/Rmfera/community_library"
          // site="https://www.google.com"
        />
        <Card
          img={sgm}
          title="Student Grade Manager"
          tech="Node.js, JavaScript e lib(uuid)"
          description="O Student Grade Manager é uma API minimalista construída para o gerenciamento de notas de alunos. Este projeto destaca-se por utilizar puramente o módulo nativo do Node.js para a criação do servidor e manipulação de rotas, sem a dependência de frameworks externos como o Express."
          repo="https://github.com/Rmfera/student_grade_manager"
          // site="https://www.google.com"
        />
        <Card
          img={flp}
          title="File Management Project"
          tech="Node.js, Express, Javascript, libs(dates-difference-calculator, readline-sync) "
          description="Um projeto simples de Node.js para gerenciar arquivos, utilizando módulos CommonJS e ES Modules. Este projeto permite: Criar, ler, atualizar e deletar arquivos. O objetivo acadêmico deste projeto é ensinar o aluno sobre organização do código em módulos, utilizar boas práticas de Node.js com separação de responsabilidades."
          repo="https://github.com/Rmfera/file-management-project-com-ES-modules"
          // site="https://www.google.com"
        />
        <Card
          img={prv}
          title="Desafio 03 - Meu Portfólio Pessoal"
          tech="React, Vite, Javascript e Eslint"
          description="Este projeto é um portfólio moderno desenvolvido com React e Vite, focado em performance, modularidade e uma experiência de usuário fluida. A aplicação apresenta minhas competências, projetos e meios de contato de forma organizada"
          repo="https://github.com/Rmfera/RID166206_Desafio03"
          // site="https://www.google.com"
        />

        <Card
          img={salesDashboard}
          title="DNC SALES DASHBOARD"
          tech="React 19, TypeScript, Vite, Chart.js & React-Chartjs-2, Material UI (MUI), Styled Components & Emotion, Redux Toolkit (RTK), Axios, JWT Decode, JS-Cookie, Cypress, Jest & React Testing Library, Husky e ESLint & Prettier."
          description="Este é um projeto de Dashboard de Vendas de alto nível, desenvolvido com React 19, TypeScript e Vite. A aplicação foca na visualização de dados complexos através de gráficos interativos, gerenciamento de estado global com Redux e uma arquitetura robusta preparada para testes automatizados."
          repo="https://github.com/Rmfera/dnc-sales-dashboard-rmf"
          // site="https://www.google.com"
        />

        <Card
          img={dncWheather}
          title="DncWeather - Busca de Endereço e Clima"
          tech="HTML5, CSS3 e JavaScript (ES6+)."
          description="Uma aplicação front-end simples e eficiente que permite ao usuário consultar informações de endereço via CEP e a previsão do tempo atual por coordenadas geográficas, mostrando as informações do CEP e a temperatura com base na Latitude e Longitude fornecidos e também salvando os dados de consulta em uma planilha externa."
          repo="https://github.com/Rmfera/reidncweather"
          // site="https://www.google.com"
        />
      </section>     
    </div>
  );
}

export default Projects;
