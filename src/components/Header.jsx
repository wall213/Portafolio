import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <HeaderContainer>
      <Logo>
        <a href="#" onClick={scrollToTop}>Software Developer</a>
      </Logo>
      <Nav>
        <NavList>
          <li><NavLink href="#about" $active={activeSection === 'about'} className="label-caps">SOBRE MÍ</NavLink></li>
          <li><NavLink href="#projects" $active={activeSection === 'projects'} className="label-caps">PROJECTOS</NavLink></li>
          <li><NavLink href="#stack" $active={activeSection === 'stack'} className="label-caps">STACK</NavLink></li>
          <li><NavLink href="#contact" $active={activeSection === 'contact'} className="label-caps">CONTACTO</NavLink></li>
        </NavList>
      </Nav>
      <Actions>
        <button aria-label="Terminal">
          <IconTerminal />
        </button>
      </Actions>
    </HeaderContainer>
  );
};

export default Header;

const IconTerminal = () => (
  <svg viewBox="0 0 25 25" fill="currentColor">
    <rect x="2" y="5" width="20" height="16" rx="2" />
    <rect x="4" y="10" width="16" height="9" fill="var(--color-bg)" />
    <path d="M6,12l2,2l-2,2h1.2l2-2l-2-2H6z" fill="currentColor" />
    <rect x="12" y="15.5" width="4" height="1.5" fill="currentColor" />
  </svg>
);

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  gap: 32px;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background-color: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 768px) {
    padding: 16px 24px;
  }
`;

const Logo = styled.div`
  flex: 1;
  flex-shrink: 0;
  a {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 24px;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    white-space: nowrap;
  }
`;

const Nav = styled.nav`
  flex: 2;
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
`;

const NavLink = styled.a`
  font-size: 16px;
  color: ${props => props.$active ? 'var(--color-accent)' : 'var(--text-primary)'};
  opacity: ${props => props.$active ? '1' : '0.7'};
  transition: opacity 0.2s ease, color 0.2s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-accent);
    transform: scaleX(${props => props.$active ? '1' : '0'});
    transform-origin: center;
    transition: transform 0.2s ease;
  }

  &:hover {
    opacity: 1;
    color: var(--color-accent);
    
    &::after {
      transform: scaleX(1);
    }
  }
`;

const Actions = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  button {
    color: var(--text-primary);
    opacity: 0.7;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 1;
      color: var(--color-accent);
      transform: translateY(-2px);
    }
    
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;
