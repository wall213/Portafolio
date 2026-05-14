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
  margin-bottom: 48px;
  font-size: 5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 32px;
  }

  @media (max-width: 480px) {
    font-size: 2.8rem;
    margin-bottom: 24px;
  }
`;

const HeroTitle = styled.h1`
  margin-bottom: 48px;
  background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
