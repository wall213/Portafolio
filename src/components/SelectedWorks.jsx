import styled from 'styled-components';

const SelectedWorks = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A high-throughput headless commerce engine built with .NET and React.',
      tags: ['REACT', '.NET', 'SQL'],
      image: '/project-1.png'
    },
    {
      id: 2,
      title: 'AI SaaS Engine',
      description: 'Predictive analytics dashboard utilizing Python and real-time streaming.',
      tags: ['PYTHON', 'EXPRESS', 'REACT'],
      image: '/project-2.png'
    },
    {
      id: 3,
      title: 'FinTech App',
      description: 'Cross-platform mobile wallet with biometric security and instant transfers.',
      tags: ['REACT NATIVE', 'NODE.JS', 'POSTGRES'],
      image: '/project-3.png'
    }
  ];

  return (
    <WorksSection id="projects" className="section container">
      <WorksHeader>
        <WorksTitleGroup>
          <h2>Trabajos selecionados</h2>
          <p>Una colección de sistemas creados por mi para mejorar el rendimiento de tareas recurrentes.</p>
        </WorksTitleGroup>
      </WorksHeader>
      
      <WorksGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} className="glass-panel">
            <ProjectImage>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ProjectTags>
                {project.tags.map(tag => (
                  <Tag key={tag} className="label-caps">{tag}</Tag>
                ))}
              </ProjectTags>
            </ProjectContent>
          </ProjectCard>
        ))}
      </WorksGrid>
    </WorksSection>
  );
};

export default SelectedWorks;

const WorksSection = styled.section`
  // Section uses global padding from index.css
`;

const WorksHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 64px;
  border-bottom: 1px solid var(--border-light);
  padding-bottom: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const WorksTitleGroup = styled.div`
  p {
    color: var(--text-secondary);
    margin-top: 8px;
  }
`;

const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectImage = styled.div`
  aspect-ratio: 16/10;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(80%) brightness(0.8);
    transition: all 0.3s ease;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--border-accent);
    box-shadow: var(--glow-ambient);

    ${ProjectImage} img {
      filter: grayscale(0%) brightness(1);
      transform: scale(1.02);
    }
  }
`;

const ProjectContent = styled.div`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h3 {
    margin-bottom: 12px;
  }

  p {
    color: var(--text-secondary);
    font-size: 15px;
    margin-bottom: 24px;
    flex-grow: 1;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  padding: 6px 12px;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-pill);
  color: var(--color-accent);
  background: rgba(18, 18, 18, 0.5);
`;
