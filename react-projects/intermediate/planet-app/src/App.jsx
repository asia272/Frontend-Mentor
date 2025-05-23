import { Routes, Route } from 'react-router-dom';
import PlanetPage from './pages/PlanetPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/:planetName" element={<PlanetPage />} />
      </Routes>
    </>

  );
}

export default App;
