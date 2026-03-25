require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// rotas
const agendamentoRoutes = require('./routes/agendamentoRoutes');
app.use('/agendamentos', agendamentoRoutes);

// arquivos estáticos
app.use(express.static('public'));

const jwt = require('jsonwebtoken');
const SECRET = 'segredo-super-forte';
// login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (email === 'admin@gmail.com' && senha === '123456') {

    const token = jwt.sign(
      { email },
      SECRET,
      { expiresIn: '1d' }
    );

    return res.json({ token });
  }

  return res.status(401).json({ erro: 'Credenciais inválidas' });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});