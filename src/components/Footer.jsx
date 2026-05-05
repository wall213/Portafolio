import styled from 'styled-components';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer className="container">
      <FooterContent>
        <div>
          <FooterLogo>Software Developer</FooterLogo>
        </div>
        
        <FooterCopyright className="label-caps">
          &copy; {currentYear} THE ARCHITECT. ENGINEERED FOR PERFORMANCE.
        </FooterCopyright>
        
        <FooterLinks className="label-caps">
          <a href="https://github.com/alexrivera" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <a href="https://linkedin.com/in/alexrivera" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding-top: 48px;
  padding-bottom: 48px;
  border-top: 1px solid var(--border-light);
  margin-top: 64px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }
`;

const FooterLogo = styled.span`
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 16px;
  color: var(--text-primary);
  letter-spacing: -0.02em;
`;

const FooterCopyright = styled.div`
  color: var(--text-secondary);
  opacity: 0.5;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 24px;

  a {
    color: var(--text-secondary);
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-accent);
    }
  }
`;
