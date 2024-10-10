import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    colegiado: '',
    nombre: '',
    email: '',
    dpi: '',
    fechaNacimiento: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de registro irá aquí
  };

  return (
    <div className="register-form">
      <h2>Registro de Votantes</h2>
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
        <Form.Group controlId="nombre">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su correo"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
        <Form.Group controlId="fechaNacimiento">
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control
            type="date"
            value={formData.fechaNacimiento}
            onChange={(e) => setFormData({ ...formData, fechaNacimiento: e.target.value })}
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
        <Button type="submit">Registrar</Button>
      </Form>
    </div>
  );
};

export default Register;
