const express = require('express')

const route = express.Router();

const posts = require('../controler/post-controler')

route.get('/', posts.get);
// route.post('/', posts);
// route.put('/:id', posts);
// route.delete('/:id', posts)

module.exports = route;