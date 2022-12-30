const pool = require("../../config/database");
const crypto = require("crypto")
const bcrypt = require("bcrypt");
var createHash = require("hash-generator");

module.exports = {
  create: (data, callBack) => {
    var hash1 = createHash(5);
    const datenow = new Date;
    pool.query(
     `insert into consultation (consult_id,patient_id ,user_id ,date,prescription,diagnosis,prognosis,referral) values (?,?,?,?,?,?,?,?)`,
  [hash1,data.patient_id ,data.user_id ,datenow,data.prescription,data.dagnosis,data.prognosis,data.referral],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
        
      }
    );
  },
  // getconsultbyname: (data, callBack) => {
  //   pool.query(
  //     `select * from consult where first_name  = ? or last_name  = ? `,
  //     [data.first,data.last],
  //     (error, results, fields) => {
  //       if (error) {
  //         callBack(error);
  //       }
  //       return callBack(null, results);
  //     }
  //   );
  // },

  getconsultbyId: (data, callBack) => {
    pool.query(
      `select * from consultation where consult_id = ?`,
      [data.consult_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getconsult: callBack => {
    pool.query(
      `select * from consultation`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updateconsults: (data, callBack) => {
    pool.query(
      `update consultation set prescription=?,diagnosis=?,prognosis=?,referral=? where consult_id=? `,
      [data.prescription,data.dagnosis,data.prognosis,data.referral,data.consult_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  
  deleteallconsult: (data, callBack) => {
    pool.query(
      `truncate table consultation`,
      [data.consult_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  
  deleteconsult: (data, callBack) => {
    pool.query(
      `delete from consultation where consult_id = ?`,
      [data.consult_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};