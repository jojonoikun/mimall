/*
 * @Author: JOJOcode
 * @Date: 2022-12-07 16:35:01
 * @LastEditTime: 2022-12-07 16:41:21
 * @FilePath: \server\backstage\js\mysqlconnection.js
 */

var mysql = require("mysql");
var mysql_config = {
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "mimall",
  port: 3306,
  multipleStatements: true,
};

function handleDisconnection() {
  var connection = mysql.createConnection(mysql_config);
  connection.connect(function (err) {
    if (err) {
      setTimeout("handleDisconnection()", 2000);
    }
  });

  connection.on("error", function (err) {
    logger.error("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      logger.error("db error执行重连:" + err.message);
      handleDisconnection();
    } else {
      throw err;
    }
  });
  exports.connection = connection;
}

exports.handleDisconnection = handleDisconnection;
