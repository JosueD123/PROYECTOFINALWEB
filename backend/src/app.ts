import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const app = express();
app.use(express.json());

interface User {
  colegiado: string;
  nombre: string;
  password: string;
  dpi: string;
}

const users: User[] = [];

// Ruta para registrar usuarios
app.post('/register', async (req: Request, res: Response): Promise<Response> => {
  const { colegiado, nombre, password, dpi } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ colegiado, nombre, password: hashedPassword, dpi });
  return res.status(201).send('Usuario registrado');
});

// Ruta para iniciar sesión
app.post('/login', async (req: Request, res: Response): Promise<Response> => {
  const { colegiado, password } = req.body;
  const user = users.find((u) => u.colegiado === colegiado);
  if (!user) return res.status(400).send('Usuario no encontrado');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Contraseña incorrecta');

  const token = jwt.sign({ id: user.colegiado }, 'your_jwt_secret', { expiresIn: '1h' });
  return res.json({ token });
});

// Iniciar el servidor
app.listen(3000, () => console.log('Server running on port 3000'));
