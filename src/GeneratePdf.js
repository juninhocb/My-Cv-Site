import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import me from './imgs/me.png';

// Estilos para o PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    marginBottom: 10,
    fontSize: 12,
  },
  table: {
    display: 'table',
    width: 'auto',
    marginTop: 20,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
  tableCell: {
    margin: 5,
    fontSize: 12,
  },
});

// Componente do documento PDF
const MyDocument = ({ language }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.headerSection}>
        <Image src={me} style={styles.image} />
        <View>
          <Text style={styles.header}>Carlos Eduardo dos Santos Junior</Text>
          <Text style={styles.text}>👤 {language === 'en' ? 'Age: 27' : 'Idade: 27 Anos'}</Text>
          <Text style={styles.text}>
            👷{' '}
            {language === 'en'
              ? 'Mechatronics Engineer with specialization in computational systems'
              : 'Engenheiro Mecatrônico com especialidade em sistemas computacionais'}
          </Text>
          <Text style={styles.text}>
            🎓{' '}
            {language === 'en'
              ? 'Graduated from the Federal University of Santa Catarina'
              : 'Graduado pela Universidade Federal de Santa Catarina'}
          </Text>
          <Text style={styles.text}>
            🗽{' '}
            {language === 'en'
              ? 'Proficient in English - 60/75 Toefl'
              : 'Inglês proficiente - 60/75 Toefl'}
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>{language === 'en' ? 'About Me' : 'Sobre mim'}</Text>
        <Text style={styles.text}>
          {language === 'en'
            ? "Hello, I'm passionate about soccer and a fervent Palmeiras fan. I love to travel and enjoy life to the fullest, exploring new places and experiences. I regularly go to the gym and value a healthy lifestyle, opting for natural training without the use of steroids. Additionally, I enjoy horseback riding and playing tennis, activities that allow me to be in touch with nature and stay active. I'm not a fan of video games and prefer to spend my free time away from screens (except when I want to program), not watching series and movies."
            : 'Olá, sou um apaixonado por futebol e um torcedor fervoroso do Palmeiras. Adoro viajar e aproveitar a vida ao máximo, explorando novos lugares e experiências. Frequento a academia regularmente e valorizo um estilo de vida saudável, optando por um treino natural sem o uso de esteroides. Além disso, gosto de andar a cavalo e jogar tênis, atividades que me permitem estar em contato com a natureza e manter-me ativo. Não sou fã de jogos eletrônicos e prefiro passar meu tempo livre longe das telas (Exceto quando quero programar), não assistindo séries e filmes.'}
        </Text>
        <Text style={styles.text}>
          {language === 'en'
            ? 'When it comes to personal preferences, I have a strong inclination to learn hard skills. My journey in programming started with the C language, as I always wanted to understand the root of everything. I have a passion for mathematics and physics, and exact sciences in general. I am always up to date with the latest trends in artificial intelligence and seek to use the most modern tools available.'
            : 'Quando se trata de preferências pessoais, tenho uma forte inclinação para aprender hard skills. Minha jornada na programação começou com a linguagem C, pois sempre tive o desejo de entender a raiz de tudo. Tenho uma paixão por matemática e física, e as ciências exatas em geral. Estou sempre atualizado com as últimas tendências em inteligência artificial e busco utilizar as ferramentas mais modernas disponíveis.'}
        </Text>
        <Text style={styles.text}>
          {language === 'en'
            ? 'I am also a great music enthusiast. I can play the guitar, drums, and acoustic guitar, and my favorite and unique musical genres are Rock and American Country. Music is an important part of my life, providing a perfect balance between work and leisure.'
            : 'Sou também um grande apreciador de música. Sei tocar guitarra, bateria e violão, e meus gêneros musicais favoritos e únicos são Rock e Country Americano. A música é uma parte importante da minha vida, proporcionando um equilíbrio perfeito entre trabalho e lazer.'}
        </Text>
        <Text style={styles.text}>
          {language === 'en'
            ? 'My behavioral pattern is marked by tranquility and dedication. I am a calm, hardworking, and disciplined person who knows exactly what I want and work hard to achieve my goals. I value consistency and perseverance in everything I do, always keeping focus on my goals.'
            : 'Meu padrão comportamental é marcado pela tranquilidade e dedicação. Sou uma pessoa tranquila, esforçada e disciplinada, que sabe exatamente o que quer e trabalha arduamente para alcançar seus objetivos. Valorizo a consistência e a perseverança em tudo o que faço, sempre mantendo o foco em minhas metas.'}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>
          {language === 'en' ? 'Professional Experience' : 'Experiência Profissional'}
        </Text>
        <Text style={styles.text}>
          {language === 'en'
            ? 'With over 5 years of experience in Java, I have worked in various areas, from web development to infrastructure. My specialty is backend development using Java and Spring Framework. I have experience in several professional and academic projects.'
            : 'Com mais de 5 anos de experiência em Java, trabalhei em diversas áreas, desde desenvolvimento web até infraestrutura. Minha especialidade é no desenvolvimento backend utilizando Java e Spring Framework. Tenho experiência em diversos projetos profissionais e acadêmicos.'}
        </Text>
        <Text style={styles.text}>
          {language === 'en'
            ? 'I currently work at Circuitec Indústria de Equipamentos Eletrônicos. Circuitec is my first and only company in the technology field, and I have been with them since March 2022, and I am very happy with it.'
            : 'Atualmente trabalho na Circuitec Indústria de Equipamentos Eletrônicos. A Circuitec é a minha primeira e única empresa no ramo da tecnologia e estou nela desde Março de 2022, e estou muito contente nela.'}
        </Text>
        <Text style={styles.text}>
          {language === 'en'
            ? 'Among my main services provided so far, I highlight the renewal of a legacy desktop system to a new one, the replacement of old Java EE applications with new ones in Spring, creation of APIs for facial time clock and JNI integration with the company\'s equipment and services.'
            : 'Dentre meus principais serviços prestados até aqui, eu destaco a renovação de um sistema legado desktop para um novo, a substituição de aplicação antiga Java EE por novas em Spring, criação de API\'s para relógio de ponto facial e integração JNI com o equipamento e serviços da empresa.'}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>{language === 'en' ? 'Technologies' : 'Tecnologias'}</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Database</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>MySQL, PostgreSQL</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Frameworks</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Spring Framework, Java Swing, React JS</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Web</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>MVC, Web Flux, RPC, Web Sockets</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Messaging</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Kafka, RabbitMQ, ActiveMQ, JMS</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Monitoring</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Actuator, ELK Stack, Prometheus</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Security</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>OAuth, JWT</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Infrastructure</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Docker, Linux, Windows Server, GCP, AWS</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>IDE</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>IntelliJ IDEA, NetBeans, VSCode</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>{language === 'en' ? 'Contact' : 'Contato'}</Text>
        <Text style={styles.text}>juninhocb@hotmail.com</Text>
        <Text style={styles.text}>
          {language === 'en'
            ? 'Contact me through my social networks or send an email to the address above.'
            : 'Entre em contato comigo através das minhas redes sociais ou envie um email para o endereço acima.'}
        </Text>
      </View>
    </Page>
  </Document>
);

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
