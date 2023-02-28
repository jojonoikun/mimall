/*
 * @Author: JOJOcode
 * @Date: 2022-12-07 11:43:36
 * @LastEditTime: 2022-12-07 11:59:04
 * @FilePath: \MiMallBackstage-main\backstage\routes\address.js
 */
var express = require("express");
var router = express.Router();

var Search = require("../js/search");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mimall",
});

router.get("/province", function (req, res) {
  Search.getAllProvince(connection, res);
});

router.get("/city", function (req, res) {
  Search.getAllCity(req.query, connection, res);
});

router.get("/county", function (req, res) {
  Search.getAllCounty(req.query, connection, res);
});
module.exports = router;
