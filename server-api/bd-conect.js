const mysql = require('mysql');
let isFirstConnection = true;

function creationDatabase(req, res) {
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'Blog',
  });

  connection.connect(err => {
    if (err) {
      return console.log(err);
    } else {
      // if (isFirstConnection === true) {
        // database(connection);
        database(connection)
        // isFirstConnection = false;
        console.log('conectou');
      // }
    }
  });

  connection.query(req, (err, result, field) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
    connection.end();
  });

  // connection.query(req).toPromise()
  // .then(result => result)
  // .catch(err => console.log(err))
  // .finally(connection => connection.end())
}


async function database(conn) {
  let sql = 'CREATE DATABASE IF NOT EXISTS Blog';

  let createDatabase = new Promise((res, rej) => {
    res(
      conn.query(sql, (err, result, field) => {
        if (err) {
          return console.log(err);
        }
        console.log('Created database');
      })
    );
  }).then(() => {
    createUsersTable(conn);
  });
}

function createUsersTable(conn) {
  const sql =
    'CREATE TABLE IF NOT EXISTS Users (' +
    'id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, ' +
    'name VARCHAR(100) , ' +
    'email VARCHAR(100) , ' +
    'password VARCHAR(100) ' +
    ');';

  let createUser = new Promise((res, rej) => {
    res(
      conn.query(sql, (err, result, field) => {
        if (err) {
          return console.log(err);
        }
        console.log('Created table Users');
      })
    );
  }).then(() => {
    createPostsTable(conn);
  });
}

function createPostsTable(conn) {
  const sql =
    'CREATE TABLE IF NOT EXISTS Posts ( ' +
    'id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, ' +
    'title VARCHAR(100), ' +
    'image TEXT, ' +
    'content TEXT, ' +
    'idUser INT' +
    ');';
  const tableUser = new Promise((res, rej) => {
    res(
      conn.query(sql, (err, result, field) => {
        if (err) {
          return console.log(err);
        }
        console.log('Created table Posts');
      })
    );
  }).then(() => {
    const alterTable =
      'ALTER TABLE Posts ADD CONSTRAINT fk_user FOREIGN KEY (idUser) REFERENCES users (id); ';
    conn.query(alterTable, (err, result, field) => {
      if (err) {
        return console.log(err);
      }
      console.log('Altered table Posts');
    });
  });
}

module.exports = creationDatabase;
