const express = require('express');

const router = express.Router();

const user = require('../controler/user-controler')

router.get('/', user.get)

module.exports = router;