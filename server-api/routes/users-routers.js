const express = require('express');
const router = express.Router();

const user = require('../controler/user-controler')

router.get('/', user.get)
router.post('/', user.post)
router.delete('/:id', user.delete)

module.exports = router;