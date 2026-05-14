import styled from 'styled-components';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer className="container">
      <FooterContent>
        <FooterCopyright className="label-caps">
          &copy; {currentYear} 
        </FooterCopyright>
        <SocialLinks className="mobile-only-flex">
          <a href="https://github.com/wall213" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <IconGithub />
          </a>
          <a href="https://www.linkedin.com/in/aldo-garc%C3%ADa-4bb0011a5" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <IconLinkedIn />
          </a>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const IconGithub = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

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

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 24px;
    text-align: center;
  }
`;

const FooterCopyright = styled.div`
  color: var(--text-secondary);
  opacity: 0.5;
`;

const SocialLinks = styled.div`
  display: none;
  gap: 24px;

  &.mobile-only-flex {
    @media (max-width: 900px) {
      display: flex;
    }
  }

  a {
    color: var(--text-secondary);
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: var(--color-accent);
      transform: translateY(-3px);
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
