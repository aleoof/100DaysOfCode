const PostModel = require('../models/post');
const sql = require('../bd-conect');

let posts = new PostModel();

exports.get = async (req, res, next) => {
  let getAllPost = sql.creationDatabase('SELECT * FROM posts', res);
};

exports.post = async (req, res, next) => {
  posts = req.body;
  sql(
    `INSERT IN TO posts(title, image, content, idUser) VALUES ("${posts.title}", "${posts.image}", "${posts.content}", ${parseInt(posts.idUser)})`,
    res
  );
};

exports.delete = async (req, res, next) => {
  posts = req.body;
  sql(
    `DELETE FROM posts WHERE id= ${parseInt(posts.id)}`,
    res
  )
}
