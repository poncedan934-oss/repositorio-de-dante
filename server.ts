import 'dotenv/config';

import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();

app.use(express.json());

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// Endpoint de prueba
app.get('/', (_req, res) => {
  res.json({
    mensaje: 'Servidor funcionando correctamente',
  });
});

io.on('connection', (socket) => {
  console.log(`Cliente conectado: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`Cliente desconectado: ${socket.id}`);
  });
});

app.post('/eventos', (req, res) => {
  const evento = req.body;

  io.emit('nuevoEvento', evento);

  res.status(201).json({
    mensaje: 'Evento enviado correctamente',
    evento,
  });
});



const PORT = Number(process.env.PORT) || 3000;

server.listen(PORT, () => {
  console.log(`Servidor HTTP ejecutándose en http://localhost:${PORT}`);
  console.log(`Socket.IO disponible en http://localhost:${PORT}`);
});
