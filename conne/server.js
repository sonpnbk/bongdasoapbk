var http = require("http");
var setting = require("./../settings");
var user = require("./../controllers/user");
var dudoantrandau = require("./../controllers/dudoantrandau");
var trandau = require("./../controllers/trandau");
var app = require("express")();

http.createServer(app).listen(9000);
app.get("/token=" + setting.token + "/user", function (req, resp) {
    user.getListUser(req, resp);
});
app.get("/token=" + setting.token + "/user=:id", function (req, resp) {
    var id = req.params.id;
    user.getUser(req, resp, id);
});
app.get("/token=" + setting.token + "/user/add/:id/:email/:password/:coin", function (req, resp) {
    var id = req.params.id;
    var email = req.params.email;
    var password = req.params.password;
    var coin = req.params.coin;
    user.addUser(req, resp, id, email, password, coin);
});

//add them du doan user
app.get("/token=" + setting.token + "/dudoan/add/:idtrandau/:iduser/:dudoan/:coindudoan", function (req, resp) {
    var idtrandau = req.params.idtrandau;
    var iduser = req.params.iduser;
    var dudoan = req.params.dudoan;
    var coindudoan = req.params.coindudoan;
    dudoantrandau.addUserDudoan(req, resp, idtrandau, iduser, dudoan, coindudoan);
});
app.get("/token=" + setting.token + "/dudoan=:iduser", function (req, resp) {
    var iduser = req.params.iduser;
    dudoantrandau.getListUserDudoan(req, resp, iduser);
});

//tran dau
app.get("/token=" + setting.token + "/trandau=:trangthai", function (req, resp) {
    var trangthai = req.params.trangthai;
    trandau.getListTrandau(req, resp, trangthai);
});