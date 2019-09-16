const PostModel = require('../models/post');

const sql = require('../bd-conect');

exports.get = async (req, res, next) => {
  let getAllPost = sql.creationDatabase('SELECT * FROM Post');
  try {
    res.status(200).send(getAllPost);
  } catch (e) {
    res.status(500).send({
      message: 'Error on process request',
    });
  }
};

exports.post = async (req, res, next) => {
  let posts = new PostModel(req.body);
  sql.creationDatabase(
    `INSERT IN TO posts(title, image, content) VALUE (${posts.title}, ${posts.image}, ${posts.content})`
    );
    res.json(req.body)
};

// exports.update = async()