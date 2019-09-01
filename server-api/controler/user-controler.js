const userModel = require('../models/user')

exports.get = async (req, res, next) => {
    let allUsers = new userModel();
    allUsers.id = 1;
    allUsers.name = 'Alexandre Oliveira',
    allUsers.password = '123456';
    allUsers.email = 'alexandre_osvaldo@hotmail.com'
    try{
        res.status(200).send(allUsers);
    } catch (e) {
        res.status(500).send({
            message: 'Error on request'
        })
    }
}