import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroSection className="section container">
      <HeroContent>
        <HeroLabel className="label-caps">ALDO GARCIA</HeroLabel>
        <HeroTitle>DESARROLLADOR FULLSTACK</HeroTitle>
        <HeroSubtitle>
          De la idea a la solución: simple, funcional y escalable.
        </HeroSubtitle>
        <HeroActions>
          <PrimaryButton>Ver Proyectos</PrimaryButton>
          <SecondaryButton>Contacto</SecondaryButton>
        </HeroActions>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 60px;
  min-height: 50vh;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroLabel = styled.span`
  color: var(--color-accent);
  display: block;
  margin-bottom: 24px;
  font-size: 5rem;
`;

const HeroTitle = styled.h1`
  margin-bottom: 24px;
  background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 48px;
  color: var(--text-secondary);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const Button = styled.button`
  padding: 14px 28px;
  border-radius: var(--radius-base);
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 16px;
  transition: all 0.2s ease;
`;

const PrimaryButton = styled(Button)`
  background-color: var(--color-accent);
  color: var(--text-primary);

  &:hover {
    box-shadow: var(--glow-ambient);
    filter: brightness(1.1);
  }
`;

const SecondaryButton = styled(Button)`
  background: var(--glass-bg);
  border: 1px solid var(--border-light);
  color: var(--text-primary);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  &:hover {
    border-color: var(--border-accent);
    background: rgba(18, 18, 18, 0.9);
  }
`;
