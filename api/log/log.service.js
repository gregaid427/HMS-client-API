const pool = require("../../config/database");
const crypto = require("crypto")
const bcrypt = require("bcrypt");
var createHash = require("hash-generator");

module.exports = {
  create: (data, callBack) => {
    var hash1 = createHash(5);
    const datenow = new Date;
    month = datenow.getMonth();
    year = datenow.getFullYear();
    pool.query(
     `insert into log (log_id,user_id,date,activity,month,year) values (?,?,?,?,?,?)`,
  [hash1,data.user_id,datenow,data.activity,month,year],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
        
      }
    );
  },

  getlogs: (data, callBack) => {
    pool.query(
      `select * from log where month = ? and year = ?`,
      [data.month , data.year],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deletealllog: (data, callBack) => {
    pool.query(
      `truncate table log`,
      [data.log_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  
  deletelog: (data, callBack) => {
    pool.query(
      `delete from log where month = ? and year = ?`,
      [data.month , data.year],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }



};