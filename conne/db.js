var mysql = require('mysql');
var setting = require('./settings');
var conn = mysql.createConnection(setting.dbConfig);
//k?t n?i.
conn.connect(function (req, resp, err) {
    //nếu có nỗi thì in ra
    if (err) throw err.stack;
    //nếu thành công
    var sql = "SELECT * FROM user";
    conn.query(sql, function (err, results, fields) {
        if (err) throw err;
        resp.writeHead(200, { "Content-Type": "application/json" });
        resp.write(JSON.stringify(results));
        resp.end();
    });
});
