const userModel = require('../models/user')

const sql = require('../bd-conect')

exports.get = async (req, res, next) => {
    let allUsers = sql.creationDatabase('SELECT * FROM User')
    try{
        res.status(200).send(allUsers);
    } catch (e) {
        res.status(500).send({
            message: 'Error on request'
        })
    }
}

exports.post = async (req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    sql.creationDatabase(`INSENT IN TO User(name, email, password) VALUES (${name}, ${email}, ${password})`, res)

}