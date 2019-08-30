import { Router } from 'express'

import Post from './models/post'

route = new Router();

route.post('/post-created', Post)