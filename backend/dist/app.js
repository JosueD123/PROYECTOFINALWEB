"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const users = [];
// Ruta para registrar usuarios
app.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { colegiado, nombre, password, dpi } = req.body;
    const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
    users.push({ colegiado, nombre, password: hashedPassword, dpi });
    return res.status(201).send('Usuario registrado');
}));
// Ruta para iniciar sesión
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { colegiado, password } = req.body;
    const user = users.find((u) => u.colegiado === colegiado);
    if (!user)
        return res.status(400).send('Usuario no encontrado');
    const validPassword = yield bcryptjs_1.default.compare(password, user.password);
    if (!validPassword)
        return res.status(400).send('Contraseña incorrecta');
    const token = jsonwebtoken_1.default.sign({ id: user.colegiado }, 'your_jwt_secret', { expiresIn: '1h' });
    return res.json({ token });
}));
// Iniciar el servidor
app.listen(3000, () => console.log('Server running on port 3000'));
