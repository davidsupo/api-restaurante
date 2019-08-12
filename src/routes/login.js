const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/login');

router.route('/login')
  .post(LoginController.Login);

module.exports = router;