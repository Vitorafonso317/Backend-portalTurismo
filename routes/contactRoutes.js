const express = require('express');
const router = express.Router();
const contact = require('../controllers/contactController');
 
// ✅ Criar usuário (registro) — público
router.post('/', contact.createContact);

// ✅ Listar todas as mensagens
router.get('/', contact.listContacts);
 
// ✅ Buscar mensagem por ID
router.get('/:id', contact.listContactsbyId );

module.exports = router;

