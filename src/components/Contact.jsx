import styled from 'styled-components';

const IconEmail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const IconGithub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <ContactGrid>
        <ContactInfo>
          <h2>Initiate Connection</h2>
          <p>Currently accepting inquiries for architectural consulting, fullstack development, and technical partnerships.</p>
          
          <ContactMethods>
            <ContactMethod>
              <MethodIcon><IconEmail /></MethodIcon>
              <MethodDetails>
                <span className="label-caps">EMAIL</span>
                <a href="mailto:alex@architect.dev">alex@architect.dev</a>
              </MethodDetails>
            </ContactMethod>
            
            <ContactMethod>
              <MethodIcon><IconGithub /></MethodIcon>
              <MethodDetails>
                <span className="label-caps">GITHUB</span>
                <a href="https://github.com/alexrivera" target="_blank" rel="noopener noreferrer">github.com/alexrivera</a>
              </MethodDetails>
            </ContactMethod>
          </ContactMethods>
        </ContactInfo>
        
        <ContactFormPanel className="glass-panel">
          <form onSubmit={(e) => e.preventDefault()}>
            <FormGroup>
              <label htmlFor="name" className="label-caps">FULL NAME</label>
              <input type="text" id="name" placeholder="John Doe" />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email" className="label-caps">EMAIL ADDRESS</label>
              <input type="email" id="email" placeholder="john@example.com" />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message" className="label-caps">PROJECT DESCRIPTION</label>
              <textarea id="message" rows="4" placeholder="How can I help you build?"></textarea>
            </FormGroup>
            
            <SubmitButton type="submit">
              Transmit Message
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
