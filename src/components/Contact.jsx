import { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [message, setMessage] = useState('');
  return (
    <section id="contact" className="section container">
      <ContactGrid>
        <ContactInfo>
          <h2>Iniciar Comunicacion</h2>
          <p>Actualmente aceptando proyectos de consultoria en arquitectura, 
            desarrollo fullstack y asociaciones tecnicas.</p>
          
          <ContactMethods>
            <ContactMethod>
              <MethodIcon><IconEmail /></MethodIcon>
              <MethodDetails>
                <span className="label-caps">EMAIL</span>
                <a href="mailto:garciaolveraaldo@gmail.com">garciaolveraaldo@gmail.com</a>
              </MethodDetails>
            </ContactMethod>
          </ContactMethods>
        </ContactInfo>
        
        <ContactFormPanel className="glass-panel">
          <form onSubmit={(e) => e.preventDefault()}>
            <FormGroup>
              <label htmlFor="name" className="label-caps">Nombre Completo</label>
              <input type="text" id="name" placeholder="Aldo Garcia" />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email" className="label-caps">Correo Electronico</label>
              <input type="email" id="email" placeholder="correo@example.com" />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message" className="label-caps">Descripción del Proyecto</label>
              <textarea 
                id="message" 
                rows="4" 
                placeholder="¿Como puedo ayudarte?"
                maxLength={500}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <CharCount className="label-caps">{message.length} / 500</CharCount>
            </FormGroup>
            
            <SubmitButton type="submit">
              Enviar Mensaje
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </SubmitButton>
          </form>
        </ContactFormPanel>
      </ContactGrid>
    </section>
  );
};

export default Contact;

const IconEmail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const ContactInfo = styled.div`
  h2 {
    margin-bottom: 24px;
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 48px;
    max-width: 400px;
  }
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const MethodIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
`;

const MethodDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    color: var(--text-secondary);
  }

  a {
    color: var(--text-primary);
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-accent);
    }
  }
`;

const ContactFormPanel = styled.div`
  padding: 48px;

  @media (max-width: 900px) {
    padding: 32px 24px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  label {
    color: var(--text-secondary);
  }

  input,
  textarea {
    background: rgba(5, 5, 5, 0.5);
    border: none;
    border-bottom: 1px solid var(--border-light);
    padding: 16px;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 16px;
    transition: all 0.3s ease;
    border-radius: 4px 4px 0 0;
    resize: none;

    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;

    &:focus {
      outline: none;
      border-bottom-color: var(--color-accent);
      background: rgba(5, 5, 5, 0.8);
      box-shadow: 0 4px 20px rgba(59, 130, 246, 0.05);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const CharCount = styled.div`
  align-self: flex-end;
  font-size: 10px;
  color: var(--text-secondary);
  margin-top: 4px;
  letter-spacing: 0.1em;
`;

const SubmitButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: var(--radius-base);
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 16px;
  transition: all 0.2s ease;
  background-color: var(--color-accent);
  color: var(--text-primary);

  &:hover {
    box-shadow: var(--glow-ambient);
    filter: brightness(1.1);
  }
`;
