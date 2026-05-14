import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <TopLogo>
        <IconHexagonA />
      </TopLogo>
      <BottomSection>
        <SocialLinks>
          <a href="https://github.com/wall213" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <IconGithub />
          </a>
          <a href="https://www.linkedin.com/in/aldo-garc%C3%ADa-4bb0011a5" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <IconLinkedIn />
          </a>
        </SocialLinks>
        <VerticalLine />
      </BottomSection>
    </SidebarContainer>
  );
};

export default Sidebar;
const IconHexagonA = () => (
  <svg viewBox="0 0 100 100" className="hexagon-svg">
    <polygon className="shadow" points="50,5 90,25 90,75 50,95 10,75 10,25" />
    <polygon className="front" points="50,5 90,25 90,75 50,95 10,75 10,25" />
    <text x="50" y="62" fontSize="35" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">A</text>
  </svg>
);

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

const SidebarContainer = styled.div`
  width: 80px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-bg);
  z-index: 100;
  border-right: 1px solid var(--border-light);

  @media (max-width: 900px) {
    display: none;
  }
`;

const TopLogo = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  svg {
    width: 48px;
    height: 48px;
    color: var(--color-accent);
    fill: none;

    .shadow {
      fill: var(--color-accent);
      opacity: 0;
      transition: all 0.2s ease;
    }

    .front {
      fill: var(--color-bg);
      stroke: var(--color-accent);
      stroke-width: 5;
      transition: all 0.2s ease;
    }
    
    text {
      fill: var(--color-accent);
      transition: all 0.2s ease;
    }
  }

  &:hover svg {
    .shadow {
      opacity: 1;
      transform: translate(6px, 6px);
    }
    .front, text {
      transform: translate(-3px, -3px);
    }
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 32px;

  a {
    color: var(--text-secondary);
    transition: color 0.2s ease, transform 0.2s ease;
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

const VerticalLine = styled.div`
  width: 1px;
  height: 90px;
  background-color: var(--text-secondary);
  opacity: 0.5;
`;
