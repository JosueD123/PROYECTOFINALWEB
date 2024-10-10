import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // Verifica que la ruta sea correcta
import reportWebVitals from './reportWebVitals';  // Verifica que la ruta sea correcta
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss'; // Asegúrate de que este archivo exista

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
