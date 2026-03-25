const db = require('../config/db');

exports.criar = (dados, callback) => {
  const sql = `
    INSERT INTO agendamentos 
    (cliente_nome, telefone, servico_id, profissional_id, data, hora)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    dados.nome,
    dados.telefone,
    dados.servico_id,
    dados.profissional_id,
    dados.data,
    dados.hora
  ], callback);
};

exports.listarTodos = (callback) => {
  const sql = `
    SELECT 
      a.id,
      a.cliente_nome,
      a.telefone,
      a.data,
      a.hora,
      a.status,
      s.nome AS servico,
      p.nome AS profissional
    FROM agendamentos a
    LEFT JOIN servicos s ON a.servico_id = s.id
    LEFT JOIN profissionais p ON a.profissional_id = p.id
    ORDER BY a.data, a.hora
  `;

  db.query(sql, callback);
};

exports.cancelar = (id, callback) => {
  const sql = `
    UPDATE agendamentos
    SET status = 'cancelado'
    WHERE id = ?
  `;

  db.query(sql, [id], callback);
};

exports.listarServicos = (callback) => {
  db.query('SELECT * FROM servicos', callback);
};

exports.listarProfissionais = (callback) => {
  db.query('SELECT * FROM profissionais', callback);
};