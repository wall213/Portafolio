import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SelectedWorks from './components/SelectedWorks';
import TechnicalArsenal from './components/TechnicalArsenal';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <main>
          <Hero />
          <About />
          <SelectedWorks />
          <TechnicalArsenal />
          <Contact />
        </main>
        <Footer />
      </MainContent>
    </AppContainer>
  );
}
export default App;

const AppContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 80px; /* Space for the fixed sidebar */
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;