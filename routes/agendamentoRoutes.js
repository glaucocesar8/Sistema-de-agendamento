const express = require('express');
const router = express.Router();
const controller = require('../controllers/agendamentoController');
const auth = require('../middlewares/auth');

router.post('/', controller.criar);
router.get('/todos', auth, controller.listarTodos);
router.put('/cancelar/:id', auth, controller.cancelar);
router.get('/servicos', controller.listarServicos);
router.get('/profissionais', controller.listarProfissionais);

module.exports = router;