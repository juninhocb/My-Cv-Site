import React, { useState, useEffect } from 'react';
import './WelcomeModal.css';
import usa from './imgs/usa.png';
import brasil from './imgs/brasil.png';

const WelcomeModal = ({ onClose }) => {
  const [language, setLanguage] = useState(null);
  const [message, setMessage] = useState('');
  const [showBrasil, setShowBrasil] = useState(false);
  const [showUsa, setShowUsa] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const fullMessage = 'Hello, please, select a language';
  const messages = {
    en: ['Front-end: Me', 'Infrastructure: Me', 'Design: Me'],
    pt: ['Front-end: Eu', 'Infraestrutura: Eu', 'Design: Eu'],
  };

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setMessage(fullMessage.slice(0, index));
      index++;
      if (index > fullMessage.length) {
        clearInterval(typingInterval);
        setTimeout(() => setShowBrasil(true), 500);
        setTimeout(() => setShowUsa(true), 1000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    let interval;
    if (language) {
      interval = setInterval(() => {
        setMessageIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      if (messageIndex === messages[language].length) {
        clearInterval(interval);
        setTimeout(() => onClose(language), 1500);
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
            <h1>{message}</h1>
            <div className="language-selection">
              {showBrasil && (
                <img
                  src={brasil}
                  alt="Português"
                  className="flag show"
                  onClick={() => handleLanguageSelect('pt')}
                />
              )}
              {showUsa && (
                <img
                  src={usa}
                  alt="English"
                  className="flag show"
                  onClick={() => handleLanguageSelect('en')}
                />
              )}
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
