import styled from 'styled-components';

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

const TechnicalArsenal = () => {
  const stack = [
    {
      title: 'FRONTEND',
      icon: <IconFrontend />,
      items: ['React / Next.js', 'Angular', 'Tailwind CSS']
    },
    {
      title: 'BACKEND',
      icon: <IconBackend />,
      items: ['C# / .NET Core', 'Node.js', 'Python']
    },
    {
      title: 'DATABASE',
      icon: <IconDatabase />,
      items: ['PostgreSQL', 'SQL Server', 'Supabase']
    },
    {
      title: 'MOBILE',
      icon: <IconMobile />,
      items: ['React Native', 'Expo', 'Flutter']
    }
  ];

  return (
    <section id="stack" className="section container">
      <ArsenalTitle>Technical Arsenal</ArsenalTitle>
      
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
