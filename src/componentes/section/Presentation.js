import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA';
function Presentation() {
    return (
        <div className={styles.Presentation} id="Presentation">
            <h1><strong>Bem-vindo ao meu Portfólio</strong></h1>
            <h2>Olá, eu sou Reinaldo</h2>
            <p>
                Quando estava trabalhando como Técnico de Desenvolvimento de Produtos eu também estudava Microcontroladores por conta própria e percebi que precisava melhorar meus conhecimentos em Desenvolvimento de Softwares e por isso fiz o curso superior em Sistemas de Informação que no momento era o que estava mais condizente com o momento profissional que eu vivia. 
                <br/> O cargo de Técnico de Desenvolvimento de Produtos me deu experiência com testes, tanto de hardware, bem como testes funcionais em softwares (Web, Mobile e Desktop). Esta experiência prática me deu um olhar atento aos detalhes e à qualidade que um código deve ter. 
                <br/>Mais recentemente, fazendo o curso de Full-Stack(o curso mudou para Engenharia de Software) na Escola DNC, passei a me dedicar mais ao ecossistema JavaScript/TypeScript, desenvolvendo projetos com React, Next.js e Express.js. 
                <br/>Tenho formação de Técnico em Telecomunicações que me deu uma boa bagagem para trabalhar com Eletrônica Analógica e Digital. Durante minha vida profissional tive bastante contato com equipamentos como Multímetro, Osciloscópio, Gerador de Sinais e Network Analiser. 
                <br/>Com o Bacharelado em Sistemas de Informação (Tive contato com Linguagem C, C++, Java e JavaScript) e mais recentemente curso Ténico de Full-Stack JavaScript/TypeScript que fiz devido achar que seria uma Linguagem de Programação em alta e muito versátil.
                <br/>Embora eu não tenha nenhum código no Github relativo a programação de Microcontroladores, já criei projetos particulares usando Microcontroladores PIC de 8 bits e até um produto real na empresa BIOTRON (Onde utilizei um Microcontroladore PIC de 8 bits para manipular displays de 7 segmentos, conversor analógico/digital, entradas/saídas e timers), cheguei a manipular matriz de LEDs RGB ws2812 com Arduino, ESP01 e até comprei uma plaquinha do ESP32 para algum projeto futuro utilizando WIFI.
                <br/>Busco uma oportunidade como Técnico de Desenvolvimento de Produtos, preferencialmente produtos que fazem uso da Eletrônica (Ex: Centrais de Alarmes) e fazendo uso de Softwares no desenvolvimento destes produtos. 
                <br/>Como tenho Bacharelado em Sistemas de Informação e curso Técnico de Full-Stack JavaScript/TypeScript, acredito que tenho condições de trabalhar como Trainee ou Desenvolvedor Júnior Front-End, Back-End, ou seja, onde eu possa aplicar meus conhecimentos e vivência profissional.
            </p>
            <ButtonA link="https://www.linkedin.com/in/reinaldomferreira" text='Conecte-se Comigo!' />
        </div>
    )
}

export default Presentation;