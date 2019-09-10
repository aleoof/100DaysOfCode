const mysql = require('mysql')

const conection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'blog_database'
});

conection.connect((err) => {
    if(err){
        return console.log(err)
    }
    console.log('conectou')
})

function createTables(coon){
    const sql = "CREATE TABLE IF NOT EXISTS Clientes (\n"+
    "id int NOT NULL /n"+
}