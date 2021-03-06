const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const routers = express.Router();
const port = 3000;
const mysql = require('./bd-conect');

const postRoute = require ('./routes/posts-routers')
const userRoute = require('./routes/users-routers')

app.listen(port, () => {
    let isFirstTime = 0
    isFirstTime +=1
    if (isFirstTime === 0) {
        mysql();
    }
    console.log(`App is running on port http://localhost:${port}`)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/posts', postRoute);
app.use('/user', userRoute);