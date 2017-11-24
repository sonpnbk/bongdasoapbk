var mysql = require('mysql');
var setting = require("./../settings");
var conn = mysql.createConnection(setting.dbConfig);

exports.addUserDudoan = function (req, resp, idtrandau, iduser, dudoan, coindudoan) {
    conn.connect(function (err) {
        var sql = "INSERT INTO dudoanthangthua(idtrandau, iduser, dudoan, coindudoan) VALUES (" + idtrandau + ",'" + iduser + "','" + dudoan + "'," + coindudoan + ")";
        conn.query(sql, function (err, results, fields) {
            if (err) {
                resp.writeHead(500, { "Content-Type": "text/html" });
                resp.write("<html><head><title>500</title></head><body>Error</body></html>");
                resp.end();
            }
            else {
                resp.writeHead(200, { "Content-Type": "text/html" });
                resp.write("<html><head><title>200</title></head><body>Ok</body></html>");
                resp.end();
            }

        });
    });
};
exports.getListUserDudoan = function (req, resp, iduser) {
    conn.connect(function (err) {
        var sql = "SELECT * FROM dudoanthangthua WHERE iduser= '" + iduser+"'";
        conn.query(sql, function (err, results, fields) {
            if (err) {
                resp.writeHead(500, { "Content-Type": "text/html" });
                resp.write("<html><head><title>500</title></head><body>Error</body></html>");
                resp.end();
            }
            else {
                resp.writeHead(200, { "Content-Type": "application/json" });
                var obj = {
                    status: 200,
                    data: results,
                    messenger: 'sus',
                    error: false
                };
                resp.write(JSON.stringify(obj));
                resp.end();
            }

        });
    });
};