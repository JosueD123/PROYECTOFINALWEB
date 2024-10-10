import React from 'react';
import Login from './Login'; // Asegúrate de que la ruta sea correcta
import Register from './Register'; // Asegúrate de que la ruta sea correcta

const App: React.FC = () => {
  return (
    <div>
      <h1>Bienvenido a la Aplicación de Votación</h1>
      <Login />
      <Register />
    </div>
  );
};

export default App;

