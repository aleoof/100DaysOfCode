const express = require('express');
const app = express();
const port = 3000;

const user = require('./models/user')

app.listen(port, () => {
    console.log(`App is running on port http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>')
    user.displayName('jubileu')
})