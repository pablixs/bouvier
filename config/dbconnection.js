var mysql = require('mysql');
// Localhost connect
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bouvier',
    multipleStatements: true
});

// Wiz connect
// var mysql = require('mysql');
// var con = mysql.createConnection({
//     host: 'localhost',
//     user: 'bouviera_aye',
//     password: 'hachigatsujuunana147258',
//     database: 'bouviera_bouvier',
//     multipleStatements: true
// });


// Heroku connect
// var con = mysql.createConnection({
//     host: 'us-cdbr-east-06.cleardb.net',
//     user: 'b3db9304df35fe',
//     password: '927b421b',
//     database: 'heroku_f0d84c64f510881'
// });


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

