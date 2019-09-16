const userModel = require('../models/user');

const sql = require('../bd-conect');

exports.get = async (req, res, next) => {
  let allUsers = sql(`SELECT * FROM users`, res);
};

exports.post = async (req, res, next) => {
  let user = req.body
  sql(
    `INSERT INTO users(name, email, password) VALUES ("${user.name}", "${user.email}", "${user.password}")`,
    res
  );
  // return res.json(user)
};

exports.delete = async (req, res, next) => {
  let userId = req.body.id
  sql(
    `DELETE FROM users WHERE id= ${parseInt(userId)}`,
    res
  )

}


