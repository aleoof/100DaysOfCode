const express = require('express');
const app = express();
const port = 3000;

const user = require('./models/user')
const postRoute = require ('./routes/posts-routers')

app.listen(port, () => {
    console.log(`App is running on port http://localhost:${port}`)
})

app.use('/posts', postRoute);

// app.get('/', (req, res) => {
//     res.send('<h1>hello world</h1>')
// })