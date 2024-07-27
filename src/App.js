import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Row, Col, Image, Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import docker from './imgs/docker.png';
import intelij from './imgs/intelij.png';
import java from './imgs/java.png';
import mysql from './imgs/mysql.png';
import oauth from './imgs/oauth.png';
import prometheus from './imgs/prometheus.png';
import rabbitmq from './imgs/rabbitmq.png';
import springframework from './imgs/springframework.png';
import webmvc from './imgs/webmvc.png';
import me from './imgs/me.png';
import backgroundImage from './imgs/background-site.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import WelcomeModal from './WelcomeModal';
import GeneratePdfButton from './GeneratePdf';

function App() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [language, setLanguage] = useState(null);

  const handleCloseWelcomeModal = (lang) => {
    setLanguage(lang);
    setShowWelcomeModal(false);
  };

  const generatePdfLabel = language === 'en' ? 'Generate PDF CV' : 'Gerar PDF CV';

  return (
    <>
      {showWelcomeModal && <WelcomeModal onClose={handleCloseWelcomeModal} />}
      {!showWelcomeModal && (
        <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
              <Navbar.Brand href="#home">
                {language === 'en' ? 'My Resume' : 'Meu Currículo'}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#about">{language === 'en' ? 'About Me' : 'Sobre Mim'}</Nav.Link>
                  <Nav.Link href="#experience">
                    {language === 'en' ? 'Professional Experience' : 'Experiência Profissional'}
                  </Nav.Link>
                  <Nav.Link href="#technologies">
                    {language === 'en' ? 'Technologies' : 'Tecnologias'}
                  </Nav.Link>
                  <Nav.Link href="#contact">{language === 'en' ? 'Contact' : 'Contato'}</Nav.Link>
                </Nav>
                <GeneratePdfButton language={language} />
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Container className="main-container">
            <Row id="about" className="about-section">
              <Col xs={12} md={3} className="text-center">
                <Image src={me} roundedCircle fluid width="150" />
              </Col>
              <Col xs={12} md={9}>
                <h1>Carlos Eduardo dos Santos Junior</h1>
                <p className="about-text">👤 {language === 'en' ? 'Age: 27' : 'Idade: 27 Anos'}</p>
                <p className="about-text">
                  👷{' '}
                  {language === 'en'
                    ? 'Mechatronics Engineer with specialization in computational systems'
                    : 'Engenheiro Mecatrônico com especialidade em sistemas computacionais'}
                </p>
                <p className="about-text">
                  🎓{' '}
                  {language === 'en'
                    ? 'Graduated from the Federal University of Santa Catarina'
                    : 'Graduado pela Universidade Federal de Santa Catarina'}
                </p>
                <p className="about-text">
                  🗽{' '}
                  {language === 'en'
                    ? 'Proficient in English - 60/75 Toefl'
                    : 'Inglês proficiente - 60/75 Toefl'}{' '}
                  <a href="#" className="verify-link">
                    {language === 'en' ? 'check here' : 'verifique aqui'}
                  </a>
                </p>
              </Col>
            </Row>

            <Row id="resume" className="section">
              <Col>
                <h2>{language === 'en' ? 'About Me' : 'Sobre mim'}</h2>
                <p>
                  {language === 'en'
                    ? "Hello, I'm passionate about soccer and a fervent Palmeiras fan. I love to travel and enjoy life to the fullest, exploring new places and experiences. I regularly go to the gym and value a healthy lifestyle, opting for natural training without the use of steroids. Additionally, I enjoy horseback riding and playing tennis, activities that allow me to be in touch with nature and stay active. I'm not a fan of video games and prefer to spend my free time away from screens (except when I want to program), not watching series and movies."
                    : 'Olá, sou um apaixonado por futebol e um torcedor fervoroso do Palmeiras. Adoro viajar e aproveitar a vida ao máximo, explorando novos lugares e experiências. Frequento a academia regularmente e valorizo um estilo de vida saudável, optando por um treino natural sem o uso de esteroides. Além disso, gosto de andar a cavalo e jogar tênis, atividades que me permitem estar em contato com a natureza e manter-me ativo. Não sou fã de jogos eletrônicos e prefiro passar meu tempo livre longe das telas (Exceto quando quero programar), não assistindo séries e filmes.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'When it comes to personal preferences, I have a strong inclination to learn hard skills. My journey in programming started with the C language, as I always wanted to understand the root of everything. I have a passion for mathematics and physics, and exact sciences in general. I am always up to date with the latest trends in artificial intelligence and seek to use the most modern tools available.'
                    : 'Quando se trata de preferências pessoais, tenho uma forte inclinação para aprender hard skills. Minha jornada na programação começou com a linguagem C, pois sempre tive o desejo de entender a raiz de tudo. Tenho uma paixão por matemática e física, e as ciências exatas em geral. Estou sempre atualizado com as últimas tendências em inteligência artificial e busco utilizar as ferramentas mais modernas disponíveis.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'I am also a great music enthusiast. I can play the guitar, drums, and acoustic guitar, and my favorite and unique musical genres are Rock and American Country. Music is an important part of my life, providing a perfect balance between work and leisure.'
                    : 'Sou também um grande apreciador de música. Sei tocar guitarra, bateria e violão, e meus gêneros musicais favoritos e únicos são Rock e Country Americano. A música é uma parte importante da minha vida, proporcionando um equilíbrio perfeito entre trabalho e lazer.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'My behavioral pattern is marked by tranquility and dedication. I am a calm, hardworking, and disciplined person who knows exactly what I want and work hard to achieve my goals. I value consistency and perseverance in everything I do, always keeping focus on my goals.'
                    : 'Meu padrão comportamental é marcado pela tranquilidade e dedicação. Sou uma pessoa tranquila, esforçada e disciplinada, que sabe exatamente o que quer e trabalha arduamente para alcançar seus objetivos. Valorizo a consistência e a perseverança em tudo o que faço, sempre mantendo o foco em minhas metas.'}
                </p>
              </Col>
            </Row>

            <Row id="experience" className="section">
              <Col>
                <h2>
                  {language === 'en'
                    ? 'Professional Experience'
                    : 'Experiência Profissional'}
                </h2>
                <p>
                  {language === 'en'
                    ? 'With over 5 years of experience in Java, I have worked in various areas, from web development to infrastructure. My specialty is backend development using Java and Spring Framework. I have experience in several professional and academic projects.'
                    : 'Com mais de 5 anos de experiência em Java, trabalhei em diversas áreas, desde desenvolvimento web até infraestrutura. Minha especialidade é no desenvolvimento backend utilizando Java e Spring Framework. Tenho experiência em diversos projetos profissionais e acadêmicos.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'I currently work at Circuitec Indústria de Equipamentos Eletrônicos. Circuitec is my first and only company in the technology field, and I have been with them since March 2022, and I am very happy with it.'
                    : 'Atualmente trabalho na Circuitec Indústria de Equipamentos Eletrônicos. A Circuitec é a minha primeira e única empresa no ramo da tecnologia e estou nela desde Março de 2022, e estou muito contente nela.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'Among my main services provided so far, I highlight the renewal of a legacy desktop system to a new one, the replacement of old Java EE applications with new ones in Spring, creation of APIs for facial time clock and JNI integration with the company\'s equipment and services.'
                    : 'Dentre meus principais serviços prestados até aqui, eu destaco a renovação de um sistema legado desktop para um novo, a substituição de aplicação antiga Java EE por novas em Spring, criação de API\'s para relógio de ponto facial e integração JNI com o equipamento e serviços da empresa.'}
                </p>
              </Col>
            </Row>

            <Row id="technologies" className="section">
              <Col>
                <h2>{language === 'en' ? 'Main Technologies' : 'Principais Tecnologias'}</h2>
                <Carousel>
                  <Carousel.Item>
                    <Row className="justify-content-center">
                      <Col className="d-flex flex-column align-items-center" style={{ height: '100%' }}>
                        <img className="img-fluid" src={springframework} alt="Frameworks" style={{ width: '80%' }} />
                        <div className="mt-2"><b>{language === 'en' ? 'Frameworks:' : 'Frameworks:'}&nbsp;</b>{language === 'en' ? 'Spring Framework/Java Swing/React JS' : 'Spring Framework/Java Swing/React JS'}</div>
                      </Col>
                      <Col className="d-flex flex-column align-items-center" style={{ height: '100%' }}>
                        <img className="img-fluid" src={java} alt="Linguagem" style={{ width: '80%' }} />
                        <div className="mt-2"><b>{language === 'en' ? 'Language:' : 'Linguagem:'}&nbsp;</b>{language === 'en' ? 'Java' : 'Java'}</div>
                      </Col>
                      <Col className="d-flex flex-column align-items-center" style={{ height: '100%' }}>
                        <img className="img-fluid" src={webmvc} alt="Web" style={{ width: '80%' }} />
                        <div className="mt-2"><b>{language === 'en' ? 'Web:' : 'Web:'}&nbsp;</b>{language === 'en' ? 'MVC/Web Flux/RPC/Web Sockets' : 'MVC/Web Flux/RPC/Web Sockets'}</div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Row className="justify-content-center">
                      <Col className="d-flex flex-column align-items-center" style={{ height: '100%' }}>
                        <img className="img-fluid" src={mysql} alt="BancoDeDados" style={{ width: '80%' }} />
                        <div className="mt-2"><b>{language === 'en' ? 'Database:' : 'Banco de Dados:'}&nbsp;</b>{language === 'en' ? 'MySQL/PostgreSQL' : 'MySQL/PostgreSQL'}</div>
                      </Col>
                      <Col className="d-flex flex-column align-items-center" style={{ height: '100%' }}>
                        <img className="img-fluid" src={rabbitmq} alt="Mensageria" style={{ width: '80%' }} />
                        <div className="mt-2"><b>{language === 'en' ? 'Messaging:' : 'Mensageria:'}&nbsp;</b>{language === 'en' ? 'Kafka/RabbitMQ/ActiveMQ/Jms' : 'Kafka/RabbitMQ/ActiveMQ/Jms'}</div>
                      </Col>
                      <Col className="d-flex flex-column align-items-center" style={{ height: '100%' }}>
                        <img className="img-fluid" src={prometheus} alt="Monitoramento" style={{ width: '80%' }} />
                        <div className="mt-2"><b>{language === 'en' ? 'Monitoring:' : 'Monitoramento:'}&nbsp;</b>{language === 'en' ? 'Actuator/ELK Stack/Prometheus' : 'Actuator/ELK Stack/Prometheus'}</div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Row className="justify-content-center">
                      <Col className="d-flex flex-column align-items-center" style={{ height: '100%' }}>
                        <img className="img-fluid" src={oauth} alt="Security" style={{ width: '80%' }} />
                        <div className="mt-2"><b>{language === 'en' ? 'Security:' : 'Security:'}&nbsp;</b>{language === 'en' ? 'OAuth/JWT' : 'OAuth/JWT'}</div>
                      </Col>
                      <Col className="d-flex flex-column align-items-center" style={{ height: '100%' }}>
                        <img className="img-fluid" src={docker} alt="Infrastructure" style={{ width: '80%' }} />
                        <div className="mt-2"><b>{language === 'en' ? 'Infra:' : 'Infra:'}&nbsp;</b>{language === 'en' ? 'Docker/Linux/WindowsServer/Redes/GCP/AWS' : 'Docker/Linux/WindowsServer/Redes/GCP/AWS'}</div>
                      </Col>
                      <Col className="d-flex flex-column align-items-center" style={{ height: '100%' }}>
                        <img className="img-fluid" src={intelij} alt="IDE" style={{ width: '80%' }} />
                        <div className="mt-2"><b>{language === 'en' ? 'IDE:' : 'IDE:'}&nbsp;</b>{language === 'en' ? 'Intelij Idea/NetBeans/VsCode' : 'Intelij Idea/NetBeans/VsCode'}</div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>

            <Row id="contact" className="section">
              <Col>
                <h2>{language === 'en' ? 'Contact' : 'Contato'}</h2>
                <p>
                  {language === 'en'
                    ? 'Contact me through my social networks or send an email to:'
                    : 'Entre em contato comigo através das minhas redes sociais ou envie um email para:'}{' '}
                  <a href="mailto:juninhocb@hotmail.com">juninhocb@hotmail.com</a>
                </p>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/carlos-eduardo-junior-142326120" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                  </a>
                  <a href="https://github.com/juninhocb" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>

          <footer className="footer bg-dark text-white text-center py-3">
            <Container>
              <p>&copy; 2024 Carlos Eduardo dos Santos Junior. {language === 'en' ? 'All rights reserved.' : 'Todos os direitos reservados.'}</p>
            </Container>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
