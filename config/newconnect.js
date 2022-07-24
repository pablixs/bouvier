const mysql = require('mysql');

// localhost db connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bouvier',
});

// wizhosting db connection
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'bouviera_aye',
//     password: 'hachigatsujuunana147258',
//     database: 'bouviera_bouvier',
//     multipleStatements: true
// })


function query(sql,data){
    return new Promise(function (resolve,reject){
        connection.query(sql,data,function(error,result,fields){
            if(error!=null){
                console.log(error)
    
                return reject({
                    error:true,
                    message:error.sqlMessage
                })
            }else{
                return resolve(result)
            }
        })
    })
}

module.exports = {
    connection,
    query
}