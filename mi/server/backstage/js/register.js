/*
 * @Author: JOJOcode
 * @Date: 2022-12-07 18:36:42
 * @LastEditTime: 2022-12-19 16:12:43
 * @FilePath: \backstage\js\register.js
 */
function register(body, connection, res) {
  // let sql = `insert into user(username,userpwd) values (${body.username},${body.userpwd})`;
  // let sql = `UPDATE user set username = '${body.username}' , userpwd = '${body.userpwd}'`; //成功会把所有数据都更新为这个
  // let sql = `UPDATE user set username = '${body.username}' , userpwd = '${body.userpwd}' WHERE userid = 5`; //把第5个用户覆盖
  // let sql = `insert into user(username,userpwd) values('${body.username}' , '${body.userpwd}')`;
  let sqlparams = [`"${body.username}","${body.userpwd}"`];
  let sql = `INSERT INTO user(username,userpwd) values(?,?)`;
  connection.query(sql, sqlparams, function (err) {
    if (err) {
      res.json({
        status: 3,
        msg: "注册失败",
      });
      return;
    } else {
      res.json({
        status: 2,
        msg: "注册成功",
      });
    }
  });
}

module.exports = {
  register,
};
