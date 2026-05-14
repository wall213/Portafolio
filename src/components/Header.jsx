import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    if (isMenuOpen) setIsMenuOpen(false);
    // Intersection observer handles activeSection, but we can also set it here for immediate feedback if needed
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

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
      <MenuButton onClick={toggleMenu} aria-label="Menu" className="mobile-only">
        {isMenuOpen ? <IconClose /> : <IconHexagonA />}
      </MenuButton>

      <Logo>
        <a href="#" onClick={scrollToTop}>Software Developer</a>
      </Logo>

      <Nav className="desktop-only">
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

      <MobileOverlay $isOpen={isMenuOpen}>
        <MobileNav>
          <MobileNavList>
            <li><MobileNavLink href="#about" onClick={(e) => handleNavClick(e, 'about')} $active={activeSection === 'about'} className="label-caps">SOBRE MÍ</MobileNavLink></li>
            <li><MobileNavLink href="#projects" onClick={(e) => handleNavClick(e, 'projects')} $active={activeSection === 'projects'} className="label-caps">PROJECTOS</MobileNavLink></li>
            <li><MobileNavLink href="#stack" onClick={(e) => handleNavClick(e, 'stack')} $active={activeSection === 'stack'} className="label-caps">STACK</MobileNavLink></li>
            <li><MobileNavLink href="#contact" onClick={(e) => handleNavClick(e, 'contact')} $active={activeSection === 'contact'} className="label-caps">CONTACTO</MobileNavLink></li>
          </MobileNavList>
        </MobileNav>
      </MobileOverlay>
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

const IconHexagonA = () => (
  <svg viewBox="0 0 100 100" className="hexagon-svg">
    <polygon className="shadow" points="50,5 90,25 90,75 50,95 10,75 10,25" />
    <polygon className="front" points="50,5 90,25 90,75 50,95 10,75 10,25" />
    <text x="50" y="62" fontSize="35" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">A</text>
  </svg>
);

const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const IconClose = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  gap: 32px;
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background-color: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 900px) {
    padding: 16px 24px;
  }
`;

const Logo = styled.div`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 900px) {
    justify-content: center;
    order: 2;
  }

  a {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 24px;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    white-space: nowrap;
    
    @media (max-width: 900px) {
      font-size: 20px;
    }
  }
`;

const Nav = styled.nav`
  flex: 2;
  display: flex;
  justify-content: center;

  &.desktop-only {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 8px;
  z-index: 101;
  flex: 1;
  justify-content: flex-start;

  @media (max-width: 900px) {
    display: flex;
    order: 1;
  }

  svg {
    width: 32px;
    height: 32px;
    
    &.hexagon-svg {
      color: var(--color-accent);
      fill: none;

      .shadow {
        fill: var(--color-accent);
        opacity: 0;
      }

      .front {
        fill: var(--color-bg);
        stroke: var(--color-accent);
        stroke-width: 5;
      }
      
      text {
        fill: var(--color-accent);
      }
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 48px;
`;

const NavLink = styled.a`
  font-size: 16px;
  color: ${props => props.$active ? 'var(--color-accent)' : 'var(--text-primary)'};
  opacity: ${props => props.$active ? '1' : '0.7'};
  transition: opacity 0.2s ease, color 0.2s ease;
  position: relative;
  white-space: nowrap;

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

  @media (max-width: 900px) {
    order: 3;
  }

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

const MobileOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-bg);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.8, 0, 0.2, 1);
  transform: translateY(${props => props.$isOpen ? '0' : '-100%'});
`;

const MobileNav = styled.nav`
  width: 100%;
`;

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const MobileNavLink = styled.a`
  font-size: 32px;
  font-weight: 700;
  color: ${props => props.$active ? 'var(--color-accent)' : 'var(--text-primary)'};
  transition: color 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: var(--color-accent);
  }
`;
