const mysql = require('mysql')

exports.creationDatabase = (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'Blog'
    });
    
    connection.connect((err) => {
        if(err){
            return console.log(err)
        }
        console.log('conectou');
        database(connection);
        createUsersTable(connection);
        createPostsTable(connection);
    })
}


async function database(conn){
    const sql = "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';"+
    "CREATE IF NOT EXISTS DATABASE Blog /n"+
    "USE Blog";
    await conn.query(sql, (err, result, field) => {
        if(err){
            return console.log(err);
        }
        console.log("Created database")
    })
}

function createUsersTable(coon){
    const sql = "CREATE TABLE IF NOT EXISTS Users (\n"+
    "id INT AUTO_INCREMENT NOT NULL /n"+
    "name VARCHAR(100) NOT NULL /n"+
    "email VARCHAR(100) NOT NULL /n"+
    "password VARCHAR(100) NOT NULL /n"+
    ")";

    conn.query(sql, (err, result, field) => {
        if(err){
            return console.log(err);
        }
        console.log("Created table Users")
    })
}

function createPostsTable(coon){
    const sql = "CREATE TABLE IF NOT EXISTS Posts (\n"+
    "id INT AUTO_INCREMENT NOT NULL /n"+
    "title VARCHAR(100) NOT NULL /n"+
    "image TEXT NOT NULL /n"+
    "content TEXT NOT NULL /n"+
    ")"+
    "ALTER TABLE Posts ADD CONSTRAINT 'fk_user' FOREIGN KEY ('id') REFERENCES 'Users' ('id') ";

    conn.query(sql, (err, result, field) => {
        if(err){
            return console.log(err);
        }
        console.log("Created table Posts")
    })
}