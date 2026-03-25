const model = require('../models/agendamentoModel');

exports.criar = (req, res) => {
  const dados = req.body;

  if (!dados.nome || !dados.data || !dados.hora) {
    return res.status(400).json({ erro: 'Campos obrigatórios' });
  }

  model.criar(dados, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json({ success: true });
  });
};

exports.listarTodos = (req, res) => {
  model.listarTodos((err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.set('Cache-Control', 'no-store');
    res.json(result);
  });
};

exports.cancelar = (req, res) => {
  const { id } = req.params;

  model.cancelar(id, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json({ success: true });
  });
};

exports.listarServicos = (req, res) => {
  model.listarServicos((err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.listarProfissionais = (req, res) => {
  model.listarProfissionais((err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};