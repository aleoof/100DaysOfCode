const express = require('express')

const router = express.Router();

const posts = require('../controler/post-controler')

router.get('/', posts.get);
route.post('/', posts.post);
// router.get('/:id', posts.get)
// route.put('/:id', posts);
// route.delete('/:id', posts)

module.exports = router;