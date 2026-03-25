app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (email === 'admin@gmail.com' && senha === '123456') {
    return res.json({ token: 'fake-token' });
  }

  return res.status(401).json({ erro: 'Credenciais inválidas' });
});