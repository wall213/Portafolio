import styled from 'styled-components';

const SelectedWorks = () => {
  const projects = [
    {
      id: 1,
      title: 'Portal de Pagos HDI',
      description: 'Un portal para realizar pagos de polizas hecho en React y C#/.NET como Backend, tambien interactue con base de datos.',
      tags: ['REACT', '.NET', 'SQL'],
      image: '/PortalHDI.png',
      link: 'https://portalpagos.hdi.com.mx/identificaPoliza'
    },
    {
      id: 2,
      title: 'PianoTrainer',
      description: 'Una aplicacion para practicar piano con el teclado de la computadora dando la sensacion de un piano real.',
      tags: ['REACT', 'TYPESCRIPT', 'TAILWIND'],
      image: '/PianoTrainer.png',
      link: 'https://pianotrainer.atomsystems.org/'
    },
    {
      id: 3,
      title: 'App_Gastos',
      description: 'Aplicacion para gestionar gastos personales con funciones de autenticación, gastos, ingresos, y almacenamiento de datos, categoriasy manipulacion de datos',
      tags: ['REACT NATIVE', 'SUPABASE', 'JAVASCRIPT'],
      image: '/appgastos.png',
      link: 'https://github.com/wall213/App_Gastos'
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
          <ProjectCard 
            key={project.id} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-panel"
          >
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
  background: rgba(255, 255, 255, 0.03);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
    background: #1a1a1a;
    filter: grayscale(80%) brightness(0.8);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const ProjectCard = styled.a`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;

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
