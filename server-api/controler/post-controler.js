const PostModel = require('../models/post')

exports.get = async (req, res, next) => {
    let getAllPost = new PostModel()
    getAllPost.id = 1;
    getAllPost.title = 'Titulo do post';
    getAllPost.content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta reiciendis et, quasi repellat praesentium sapiente itaque quibusdam dolorem assumenda nostrum tempore sequi non omnis provident vel quam vitae quisquam?'
    try {
        res.status(200).send(getAllPost)
    } catch (e) {
        res.status(500).send({
            message: 'Error on process request'
        })
    }
}