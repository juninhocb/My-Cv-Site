import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Link, Font } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import me from './imgs/me.png'; // Certifique-se de que a imagem está no caminho correto
import fontBold from './fonts/Poppins-Bold.ttf';
import fontMedium from './fonts/Poppins-Medium.ttf';

Font.register({
  family: 'Poppins',
  src: fontBold,
  fontWeight: 'bold'
});

Font.register({
  family: 'Poppins',
  src: fontMedium,
  fontWeight: 'normal' // Assuming Medium corresponds to a normal weight
});

// Estilos para o PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    padding: 0, // Remove margem interna
  },
  leftColumn: {
    width: '65%',
    padding: 20, // Adiciona padding para a coluna esquerda
  },
  rightColumn: {
    width: '35%',
    padding: 10, // Remove padding para a coluna direita
    backgroundColor: '#013E44',
    color: '#ffffff',
  },
  nameHeader: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 20, // Reduz o tamanho da fonte do nome
    marginBottom: 0,
  },
  header: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 16, // Reduz o tamanho da fonte do nome
    marginBottom: 0,
  },
  personalInfo: {
    fontSize: 8,
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 14,
    color: '#13A89E',
    marginBottom: 0,
  },
  text: {
    marginBottom: 10,
    fontSize: 12,
  },
  periodText: {
    fontSize: 8,
    color: '#000000',
    marginBottom: 5
  },
  section: {
    marginBottom: 0,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    alignSelf: 'center', // Centraliza a imagem verticalmente
  },
  contactSection: {
    marginBottom: 10,
  },
  contactText: {
    fontFamily: 'Poppins',
    fontSize: 10,
    marginBottom: 5,
  },
  achievementSection: {
    marginBottom: 10,
  },
  achievementText: {
    fontSize: 10, // Tamanho menor para o texto de achievements
    marginBottom: 10, // Aumentado para adicionar mais espaço
  },
  boldText: {
    fontSize: 15,
    marginBottom: 7,
    fontWeight: 'bold',
    color: '#ffffff', // Deixa o texto em branco
  },
  divider: {
    borderBottom: '1px solid #ffffff',
    marginTop: 0,
    marginBottom: 10,
  },
  skillSection: {
    marginTop: 0,
  },
  skillText: {
    fontSize: 12,
    marginBottom: 5,
  },
  link: {
    color: 'blue',
    textDecoration: 'underline',
  },
  siteLink: {
    fontSize: 10,
    marginTop: 5,
    textAlign: 'center',
  },
  footerLink: {
    fontSize: 10,
    marginTop: 30,
    textAlign: 'center',
  },
  summaryHeader: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

// Componente do documento PDF
const MyDocument = ({ language }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Coluna Esquerda */}
      <View style={styles.leftColumn}>
        <Text style={styles.nameHeader}>Carlos Eduardo dos Santos Junior</Text>
        <Text style={styles.subHeader}>{language === 'en' ? 'Software Engineer' : 'Engenheiro de Software'}</Text>
        <Text style={styles.personalInfo}>
          {language === 'en'
            ? 'Location: São Paulo, Brazil | Graduation: Mechatronic Engineer | English: Proficient'
            : 'Localização: São Paulo, Brasil | Graduação: Engenheiro Mecatrônico | Inglês: Proficiente'}
        </Text>
        <Text style={styles.header}>{language === 'en' ? 'Summary' : 'Resumo'}</Text>
        <Text style={styles.text}>
          {language === 'en'
            ? "Passionate software engineer with 5+ Years of experience developing in Java, I focus on backend systems, being proficient in developing scalable, robust, and testable applications. "
            : 'Engenheiro de software apaixonado, com mais de 5 anos de experiência em desenvolvimento com Java, focado em sistemas backend, sendo proficiente no desenvolvimento de aplicações escaláveis, robustas e testáveis. '}
        </Text>
        <View style={styles.section}>
          <View style={styles.section}>
            <Text style={styles.header}>
              {language === 'en' ? 'Professional Experience' : 'Experiência Profissional'}
            </Text>

            <Text style={styles.subHeader}>
              Circuitec - {language === 'en' ? 'Software Developer II' : 'Engenheiro de Software II'}
            </Text>
            <Text style={styles.periodText}>
              2023 - {language === 'en' ? 'Present' : 'Presente'}
            </Text>
            <Text style={styles.text}>
              {language === 'en'
                ? "In my subsequent role, I took on responsibilities as a product lead, where I guided new developers on projects while continuing to develop and maintain various applications. My focus was on backend development using Java and Spring Boot, along with frontend development using React JS. I was responsible for delegating tasks, leading code reviews, and ensuring the maintenance of existing systems, all while continuing to contribute significantly to backend code development."
                : "Em meu papel subsequente, assumi responsabilidades como líder de produto, onde guiei novos desenvolvedores em projetos enquanto continuei a desenvolver e manter várias aplicações. Meu foco foi no desenvolvimento de backend utilizando Java e Spring Boot, além do desenvolvimento frontend com React JS. Fui responsável por delegar tarefas, conduzir revisões de código e garantir a manutenção dos sistemas existentes, tudo isso enquanto continuei contribuindo significativamente para o desenvolvimento de código backend."}
            </Text>

            <Text style={styles.subHeader}>
              Circuitec - {language === 'en' ? 'Software Developer I' : 'Engenheiro de Software I'}
            </Text>
            <Text style={styles.periodText}>
              2022 - 2023
            </Text>
            <Text style={styles.text}>
              {language === 'en'
                ? "During my first year at the enterprise, I developed a variety of applications, primarily using Java with Spring Boot and Java EE. I also created a complete application for both Android and iOS using Flutter. Additionally, I utilized Python for automation tasks and developed an Alexa Skill. I addressed security challenges in running applications by implementing OAuth protocols and worked on web applications using React JS. My experience also includes deploying numerous service applications using Spring Boot on AWS, Google Cloud Platform, and VMWare, leveraging Docker and WinSW for efficient deployment."
                : "Durante meu primeiro ano na empresa, desenvolvi uma variedade de aplicações, principalmente usando Java com Spring Boot e Java EE. Também criei uma aplicação completa para Android e iOS usando Flutter. Além disso, utilizei Python para tarefas de automação e desenvolvi uma Alexa Skill. Enfrentei desafios de segurança em aplicações em execução, implementando protocolos OAuth e trabalhei em aplicações web utilizando React JS. Minha experiência também inclui o deployment de vários serviços usando Spring Boot na AWS, Google Cloud Platform e VMWare, aproveitando Docker e WinSW para um deployment eficiente."}
            </Text>

            <Text style={styles.subHeader}>
              {language === 'en' ? 'University Projects' : 'Projetos Universitários'}
            </Text>
            <Text style={styles.periodText}>
              2019 - 2022
            </Text>
            <Text style={styles.text}>
              {language === 'en'
                ? "As part of my Mechatronic Engineering degree, I had to choose between three specialization areas, and I opted for the Computer Science path. This choice required me to complete three projects during the final semesters of my graduation. The objective was to scientifically justify my decisions and present the work. I developed web applications utilizing JavaScript, HTML, and CSS, backend applications using Flask and Spring Boot, firmware using C and C++, embedded systems with Raspberry Pi, and worked with different databases like PostgreSQL and SQLite. I also deployed applications in the Heroku environment and explored computer vision with Python."
                : "Como parte do meu curso de Engenharia Mecatrônica, tive que escolher entre três áreas de especialização e optei pelo caminho da Ciência da Computação. Essa escolha exigiu que eu completasse três projetos durante os semestres finais da minha graduação. O objetivo era justificar cientificamente minhas decisões e apresentar o trabalho. Desenvolvi aplicações web utilizando JavaScript, HTML e CSS, aplicações backend usando Flask e Spring Boot, firmware usando C e C++, sistemas embarcados com Raspberry Pi, e trabalhei com diferentes bancos de dados como PostgreSQL e SQLite. Também fiz o deploy de aplicações no ambiente Heroku e explorei visão computacional com Python."}
            </Text>
          </View>

        </View>
        <View style={styles.section}>
          <Text style={styles.header}>{language === 'en' ? 'Education' : 'Educação'}</Text>
          <Text style={styles.text}>
            {language === 'en'
              ? 'Mechatronics Engineer, at Universidade Federal de Santa Catarina (Highest Ranking in the country)'
              : 'Engenheiro Mecatrônico, pela Universidade Federal de Santa Catarina (Máximo conceito do país)'}
          </Text>
          <Text style={styles.footerLink}>
            {language === 'en'
              ? 'Curriculum generated through my personal website: '
              : 'Currículo gerado através do meu site pessoal: '}
            <Link src="https://curriculo-sable-six.vercel.app/" style={styles.link}>
              https://curriculo-sable-six.vercel.app/
            </Link>
          </Text>
        </View>
      </View>

      {/* Coluna Direita */}
      <View style={styles.rightColumn}>
        <Image src={me} style={styles.image} />
        <View style={styles.contactSection}>
          <Text style={styles.header}>{language === 'en' ? 'Contact' : 'Contato'}</Text>
          <View style={styles.divider} />
          <Text style={styles.contactText}>• Github: <Link src="https://github.com/juninhocb" style={styles.link}>juninhocb</Link> </Text>
          <Text style={styles.contactText}>• LinkedIn: <Link src="https://www.linkedin.com/in/carlos-eduardo-junior-142326120/" style={styles.link}>Carlos</Link> </Text>
          <Text style={styles.contactText}>• Email: juninhocb@hotmail.com</Text>
        </View>
        <View style={styles.achievementSection}>
          <Text style={styles.header}>{language === 'en' ? 'Achievements' : 'Conquistas'}</Text>
          <View style={styles.divider} />
          <Text style={styles.boldText}>
            {language === 'en'
              ? 'Spring Certified Professional'
              : 'Spring Certified Professional'}
          </Text>
          <Text style={styles.achievementText}>
            {language === 'en'
              ? 'Certified by VMware after passing tests in Spring Core, Spring AOP, Spring Security, and more.'
              : 'Certificado pela VMware após passar em testes de conceitos como Spring Core, Spring AOP, Spring Security e muito mais.'}
          </Text>
          <Text style={styles.boldText}>
            {language === 'en'
              ? 'Java EE Legacy Server Migration'
              : 'Migração de Servidor Legado Java EE'}
          </Text>
          <Text style={styles.achievementText}>
            {language === 'en'
              ? 'Migrated a legacy Java EE server with significant improvements in memory usage, processing, and modern development adaptations using Spring Framework.'
              : 'Migrei um servidor legado Java EE com melhorias significativas no uso de memória, processamento e adaptações para métodos modernos de desenvolvimento utilizando o Spring Framework.'}
          </Text>
          <Text style={styles.boldText}>
            {language === 'en'
              ? 'Migration of a deprecated Google IoT service'
              : 'Migração de serviço IoT do Google descontinuado'}
          </Text>
          <Text style={styles.achievementText}>
            {language === 'en'
              ? 'Created a microservices architecture with messaging, circuit breaker, and saga patterns to replace a deprecated Google IoT service in 08/2023, using Spring Cloud.'
              : 'Criei uma arquitetura de microsserviços com mensageria, circuit breaker, e sagas pattern para substituir um serviço IoT do Google descontinuado em 08/2023, utilizando Spring Cloud.'}
          </Text>
        </View>
        <View style={styles.skillSection}>
          <Text style={styles.header}>{language === 'en' ? 'Skills' : 'Habilidades'}</Text>
          <View style={styles.divider} />
          <Text style={styles.skillText}>Java - Spring - SQL - </Text>
          <Text style={styles.skillText}>{language === 'en' ? 'Messaging System - ' : 'Sistemas de Mensageria - '}</Text>
          <Text style={styles.skillText}>{language === 'en' ? 'Microservices - ' : 'Microsserviços - '}</Text>
          <Text style={styles.skillText}>Docker - AWS - Linux </Text>
        </View>
      </View>
    </Page>
  </Document>
);

// Componente para download do PDF
const GeneratePdfButton = ({ language }) => (
  <PDFDownloadLink
    document={<MyDocument language={language} />}
    fileName="Carlos_Eduardo_CV.pdf"
    style={{
      textDecoration: 'none',
      padding: '10px 20px',
      color: '#fff',
      backgroundColor: '#ff6f61',
      borderRadius: '25px',
      fontWeight: 'bold',
    }}
  >
    {({ loading }) => (loading ? 'Loading document...' : language === 'en' ? 'Generate PDF CV' : 'Gerar PDF CV')}
  </PDFDownloadLink>
);

export default GeneratePdfButton;
