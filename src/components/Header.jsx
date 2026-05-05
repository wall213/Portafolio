import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer className="container">
      <Logo>
        <a href="/">Software Developer</a>
      </Logo>
      <nav>
        <NavList>
          <li><NavLink href="#about" className="label-caps">ABOUT</NavLink></li>
          <li><NavLink href="#projects" className="label-caps">PROJECTS</NavLink></li>
          <li><NavLink href="#stack" className="label-caps">STACK</NavLink></li>
          <li><NavLink href="#contact" className="label-caps">CONTACT</NavLink></li>
        </NavList>
      </nav>
      <Actions>
        <button aria-label="Toggle theme">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </button>
      </Actions>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 32px;
  gap: 32px; /* Add gap to prevent squishing */
  flex-wrap: wrap; /* Allow wrapping on very small screens */
`;

const Logo = styled.div`
  flex-shrink: 0;
  a {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 24px; /* Increased slightly to make it look intentional */
    color: var(--text-primary);
    letter-spacing: -0.02em;
    white-space: nowrap; /* Prevent wrapping inside logo */
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 32px;
  flex-wrap: wrap; /* Prevent navigation from breaking */
`;

const NavLink = styled.a`
  color: var(--text-primary);
  opacity: 0.7;
  transition: opacity 0.2s ease, color 0.2s ease;

  &:hover {
    opacity: 1;
    color: var(--color-accent);
  }
`;

const Actions = styled.div`
  button {
    color: var(--text-primary);
    opacity: 0.7;
    transition: opacity 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 1;
      color: var(--color-accent);
    }
  }
`;
