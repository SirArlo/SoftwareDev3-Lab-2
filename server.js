//1.
var sql = require('mssql');
//2.
var config = {
    server: '192.168.1.42',
    database: 'ShoppingList',
    user: 'Arlo',
    password: 'eardsa96',
    port: 1433
};
//3.
function loadEmployees() {
    //4.
    var dbConn = new sql.Connection(config);
    //5.
    dbConn.connect().then(function () {
        //6.
        var request = new sql.Request(dbConn);
        //7.
        request.query("select * from UserDetails").then(function (recordSet) {
            console.log(recordSet);
            dbConn.close();
        }).catch(function (err) {
            //8.
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        //9.
        console.log(err);
    });
}
//10.
loadEmployees();