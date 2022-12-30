const pool = require("../../config/database");
const crypto = require("crypto")
const bcrypt = require("bcrypt");
var createHash = require("hash-generator");

module.exports = {
  create: (data, callBack) => {
    var hash1 = createHash(5);
    const datenow = new Date;
    pool.query(
     `insert into vitals (vitals_id,patient_id ,user_id ,visit_id,date,pressure,weight,bmi,temperature,height,pulse_rate) values (?,?,?,?,?,?,?,?,?,?,?)`,
  [hash1,data.patient_id ,data.user_id ,data.visit_id,datenow,data.pressure,data.weight,data.bmi,data.temperature,data.height,data.pulse_rate],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
        
      }
    );
  },
  // getvitalsbyname: (data, callBack) => {
  //   pool.query(
  //     `select * from vitals where first_name  = ? or last_name  = ? `,
  //     [data.first,data.last],
  //     (error, results, fields) => {
  //       if (error) {
  //         callBack(error);
  //       }
  //       return callBack(null, results);
  //     }
  //   );
  // },

  getvitalsbyId: (data, callBack) => {
    pool.query(
      `select * from vitals where vitals_id = ?`,
      [data.vitals_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getvitals: callBack => {
    pool.query(
      `select * from vitals`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updatevital: (data, callBack) => {
    pool.query(
      `update vitals set pressure=?,weight=?,bmi=?,temperature=? ,height=? ,pulse_rate=? where vitals_id=? `,
      [data.pressure,data.weight,data.bmi,data.temperature,data.height,data.pulse_rate,data.vitals_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  
  deleteallvitals: (data, callBack) => {
    pool.query(
      `truncate table vitals`,
      [data.vitals_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  
  deletevitals: (data, callBack) => {
    pool.query(
      `delete from vitals where vitals_id = ?`,
      [data.vitals_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};