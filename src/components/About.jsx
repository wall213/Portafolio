import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection id="about" className="section container">
      <AboutGrid>
        <AboutContent>
          <h2>Ingeniero en Sistemas Computacionales</h2>
          <p>
            Soy Aldo García, desarrollador fullstack especializado en el diseño y construcción de sistemas escalables y de alto rendimiento. 
            Mi enfoque se centra en la arquitectura de software, la separación de responsabilidades y la creación de soluciones mantenibles 
            a largo plazo.
          </p>
          <p>
            Trabajo con patrones modernos, APIs robustas y estructuras modulares que permiten evolucionar productos sin comprometer su 
            estabilidad. Desde servicios backend en .NET hasta interfaces dinámicas en React y Angular, construyo soluciones integrales 
            optimizadas para rendimiento, escalabilidad y experiencia de usuario.
          </p>
          
          <AboutStats>
            <StatItem>
              <StatNumber>4+</StatNumber>
              <StatLabel className="label-caps">Años Exp.</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>40+</StatNumber>
              <StatLabel className="label-caps">Projectos</StatLabel>
            </StatItem>
          </AboutStats>
        </AboutContent>
        
        <AboutImage className="glass-panel">
          <img src="/1.jpg" alt="Aldo Garcia" />
        </AboutImage>
      </AboutGrid>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  // Section uses global padding from index.css
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  h2 {
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 24px;
    color: var(--text-secondary);
  }
`;

const AboutStats = styled.div`
  display: flex;
  gap: 48px;
  margin-top: 48px;
  border-top: 1px solid var(--border-light);
  padding-top: 32px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StatNumber = styled.span`
  font-family: var(--font-sans);
  font-size: 32px;
  font-weight: 700;
  color: var(--color-accent);
  line-height: 1;
`;

const StatLabel = styled.span`
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
`;

const AboutImage = styled.div`
  width: 100%;
  border-radius: var(--radius-base);
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
    filter: grayscale(100%) contrast(1.1);
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: grayscale(0%) contrast(1);
  }

  @media (max-width: 900px) {
    order: -1;
  }
`;
