import { Routes, Route } from 'react-router-dom';
import PlanetPage from './pages/PlanetPage';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:planetName" element={<PlanetPage />} />
      </Routes>
    </>

  );
}

export default App;
