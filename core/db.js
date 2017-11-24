var sqldb = require("mssql-tedious-1-11-4");
var settings = require("../settings");

exports.executeSql = function (sql, callback) {

    var conn = new sqldb.Connection(settings.dbConfig);
    conn.connect()
        .then(function () {
            var req = new sqldb.Request(conn);
            req.query(sql)
                .then(function (recordset) {
                    callback(recordset);        
                })
                .catch(function (err) {
                    console.log(err);
                    callback(null, err);
                });
        })
        .catch(function (err) {
            console.log(err);
            callback(null, err);
        });
};