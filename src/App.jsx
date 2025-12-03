import BackgroundLayers from './components/BackgroundLayers';
import Hero from './components/Hero';
import GiftCarousel from './components/GiftCarousel';
import BottomButtons from './components/BottomButtons';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Fondos absolutos (z-index: 1-2) */}
      <BackgroundLayers />

      {/* Contenido principal (z-index: 10+) */}
      <div className="content-wrapper">
        {/* Logo y texto arriba */}
        <Hero />

        {/* Carrusel centro */}
        <GiftCarousel />

        {/* Espacio para los botones */}
        <div className="spacer" />
      </div>

      {/* Botones abajo (z-index: 50) */}
      <BottomButtons />
    </div>
  );
}

export default App;
