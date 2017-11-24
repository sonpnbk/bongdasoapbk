var mysql = require('mysql');
var setting = require("./../settings");
var conn = mysql.createConnection(setting.dbConfig);
var util = require("util");
exports.getListUser = function (req, resp) {
    conn.connect(function (err) {
        var sql = "SELECT * FROM user";
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
exports.getUser = function (req, resp, id) {
    conn.connect(function (err) {
        var sql = "SELECT * FROM user WHERE id ='"+id+"'";
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
exports.getError = function (req, resp) {
    conn.connect(function (err) {
        var sql = "SELECT * FROM showerr";
        conn.query(sql, function (err, results, fields) {
            if (err) {
                resp.writeHead(500, { "Content-Type": "text/html" });
                resp.write("<html><head><title>500</title></head><body>Error</body></html>");
                resp.end();
            }
            else {
                resp.writeHead(200, { "Content-Type": "application/json" });
                resp.write(JSON.stringify(results));
                resp.end();
            }

        });
    });
};
exports.addUser = function (req, resp, id, email, password, coin) {
    conn.connect(function (err) {
        var sql = "INSERT INTO user(id, email, password, coin) VALUES ('" + id + "','" + email + "','" + password + "'," + coin + ")";
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
