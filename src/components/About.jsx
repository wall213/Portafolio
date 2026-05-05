import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection id="about" className="section container">
      <AboutGrid>
        <AboutContent>
          <h2>Engineering Digital Structures</h2>
          <p>
            I am Aldo Garcia, a software architect specializing in the fusion of high-performance backend systems and fluid, responsive user interfaces. My approach is rooted in the belief that code is the structural steel of the modern world.
          </p>
          <p>
            I treat every repository as a blueprint for scalability, focusing on modular architecture, performance optimization, and clean, maintainable logic. From cloud-native microservices to elegant mobile experiences, I build tools that empower businesses to scale.
          </p>
          
          <AboutStats>
            <StatItem>
              <StatNumber>5+</StatNumber>
              <StatLabel className="label-caps">Years Exp.</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>40+</StatNumber>
              <StatLabel className="label-caps">Projects</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>12</StatNumber>
              <StatLabel className="label-caps">Technologies</StatLabel>
            </StatItem>
          </AboutStats>
        </AboutContent>
        
        <AboutImage className="glass-panel">
          <img src="/portrait-placeholder.png" alt="Aldo Garcia Portrait" />
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
  aspect-ratio: 4/3;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
