import './BackgroundLayers.css';

export default function BackgroundLayers() {
  return (
    <div className="backgrounds">
      {/* Fondo cielo - 100% altura */}
      <div className="bg-sky" />

      {/* Fondo colinas - Pegado abajo, ancho completo */}
      <div className="bg-hills" />
    </div>
  );
}
