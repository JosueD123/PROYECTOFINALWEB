import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    colegiado: '',
    dpi: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticación irá aquí
  };

  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="colegiado">
          <Form.Label>Número de Colegiado</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su número de colegiado"
            value={formData.colegiado}
            onChange={(e) => setFormData({ ...formData, colegiado: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="dpi">
          <Form.Label>DPI</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su DPI"
            value={formData.dpi}
            onChange={(e) => setFormData({ ...formData, dpi: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </Form.Group>
        <Button type="submit">Ingresar</Button>
      </Form>
    </div>
  );
};

export default Login;
