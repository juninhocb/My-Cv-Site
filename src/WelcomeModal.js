import React, { useState, useEffect } from 'react';
import './WelcomeModal.css';
import usa from './imgs/usa.png';
import brasil from './imgs/brasil.png';

const WelcomeModal = ({ onClose }) => {
  const [language, setLanguage] = useState(null);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = {
    en: ['Front-end: Me', 'Infrastructure: Me', 'Design: Me'],
    pt: ['Front-end: Eu', 'Infraestrutura: Eu', 'Design: Eu'],
  };

  useEffect(() => {
    let interval;
    if (language) {
      interval = setInterval(() => {
        setMessageIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      if (messageIndex === messages[language].length) {
        clearInterval(interval);
        setTimeout(() => onClose(language), 1500); // Delay de 1,5 segundos antes de fechar o modal
      }

      return () => clearInterval(interval);
    }
  }, [language, messageIndex, messages, onClose]);

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="welcome-modal-overlay">
      <div className="welcome-modal-content">
        {!language ? (
          <>
            <h1>Please, select a language</h1>
            <div className="language-selection">
              <img
                src={brasil}
                alt="Português"
                className="flag"
                onClick={() => handleLanguageSelect('pt')}
              />
              <img
                src={usa}
                alt="English"
                className="flag"
                onClick={() => handleLanguageSelect('en')}
              />
            </div>
          </>
        ) : (
          <>
            <h1>{language === 'en' ? 'Welcome to my site! 🚀' : 'Bem Vindo ao meu Site! 🚀'}</h1>
            <h5>{language === 'en' ? 'Development Information' : 'Informações de desenvolvimento'}</h5>
            {messageIndex < messages[language].length ? (
              <p>{messages[language][messageIndex]}</p>
            ) : (
              <p className="enjoy-it">{language === 'en' ? 'Enjoy it!' : 'Aproveite!'}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default WelcomeModal;
