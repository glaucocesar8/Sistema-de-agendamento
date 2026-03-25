const jwt = require('jsonwebtoken');
const SECRET = 'segredo-super-forte';

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ erro: 'Sem token' });
  }

  try {
    const decoded = jwt.verify(token, SECRET);

    req.user = decoded; // opcional

    next();
  } catch (err) {
    return res.status(401).json({ erro: 'Token inválido' });
  }
};