var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bouvier'
});

con.connect(
    (err)=>{
        if(!err){
            console.log('Conexion establecida')
        } else {
            console.log('Error de conexion')
        }
    }
);

module.exports = con;

