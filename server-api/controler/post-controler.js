const PostModel = require('../models/post')

const sql = require('../bd-conect')

exports.get = async (req, res, next) => {
    let getAllPost = sql.creationDatabase('SELECT * FROM Post')
    try {
        res.status(200).send(getAllPost)
    } catch (e) {
        res.status(500).send({
            message: 'Error on process request'
        })
    }
}