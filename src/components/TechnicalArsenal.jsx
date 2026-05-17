import styled from 'styled-components';

const TechnicalArsenal = () => {
  const stack = [
    {
      title: 'FRONTEND',
      icon: <IconFrontend />,
      items: ['React ', 'Angular', 'Styled Components']
    },
    {
      title: 'BACKEND',
      icon: <IconBackend />,
      items: ['C# / .NET Core', 'Node.js', 'Python']
    },
    {
      title: 'BASE DE DATOS',
      icon: <IconDatabase />,
      items: ['PostgreSQL', 'SQL Server', 'Supabase']
    },
    {
      title: 'MOBILE',
      icon: <IconMobile />,
      items: ['React Native', 'Expo', 'Flutter']
    },
    {
      title: 'DevOps',
      icon: <IconContainer />,
      items: ['Git', 'Docker', 'Kubernetes']
    },
    {
      title: 'Cloud',
      icon: <IconCloud />,
      items: ['CI/CD', 'Azure', 'AWS']
    },
    {
      title: 'Deployment Personal',
      icon: <IconGlobe />,
      items: ['Manejo de Dominio', 'Configuracion de Servidor', 'Dockploy(Alternativa a Vercel)']
    },
    {
      title: 'Mantenimiento',
      icon: <IconTool />,
      items: ['Sistemas Operativos', 'Actualizacion de Software', 'Actualizacion de Hardware']
    }
  ];

  return (
    <section id="stack" className="section container">
      <ArsenalTitle>Arsenal Tecnico</ArsenalTitle>
      <ArsenalGrid>
        {stack.map((category) => (
          <ArsenalCard key={category.title} className="glass-panel">
            <ArsenalIconWrapper>
              {category.icon}
            </ArsenalIconWrapper>
            <ArsenalCardTitle className="label-caps">{category.title}</ArsenalCardTitle>
            <ArsenalList>
              {category.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ArsenalList>
          </ArsenalCard>
        ))}
      </ArsenalGrid>
    </section>
  );
};

export default TechnicalArsenal;

const IconFrontend = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const IconBackend = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const IconDatabase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const IconMobile = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const IconContainer = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const IconCloud = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
  </svg>
);

const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const IconTool = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const ArsenalTitle = styled.h2`
  text-align: center;
  margin-bottom: 64px;
`;

const ArsenalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ArsenalCard = styled.div`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--border-accent);
  }
`;

const ArsenalIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: rgba(59, 130, 246, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  color: var(--color-accent);
`;

const ArsenalCardTitle = styled.h3`
  margin-bottom: 24px;
  color: var(--text-primary);
`;

const ArsenalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  li {
    color: var(--text-secondary);
    font-size: 15px;
    position: relative;
    padding-left: 20px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: var(--color-accent);
      opacity: 0.5;
    }
  }
`;
