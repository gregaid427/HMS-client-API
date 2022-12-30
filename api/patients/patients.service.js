const pool = require("../../config/database");
const crypto = require("crypto")
const bcrypt = require("bcrypt");
var createHash = require("hash-generator");

module.exports = {
  create: (data, callBack) => {
    var hash1 = createHash(5);
    pool.query(
     `insert into patients (email,patient_id,first_name,last_name,other_name,contact_1,contact_2,sex,address,birth_date ,relative_name ,relative_contact) values (?,?,?,?,?,?,?,?,?,?,?,?)`,
                        [data.email,hash1,data.first_name,data.last_name,data.other_name,data.contact1,data.contact2,data.sex, data.address, data.birth_date, data.relative_name, data.relative_contact],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results,hash1);
        
      }
    );
  },
  getpatientbyname: (data, callBack) => {
    pool.query(
      `select * from patients where last_name  = ? `,
      [data.name],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getpatientbyId: (data, callBack) => {
    pool.query(
      `select * from patients where patient_id = ?`,
      [data.patient_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getpatients: callBack => {
    pool.query(
      `select * from patients`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updatePatients: (data, callBack) => {
    pool.query(
      `update patients set email=?,first_name=?,last_name=?,other_name=?,contact_1=?,contact_2=?,sex=?,address=?,birth_date=? ,relative_name=? ,relative_contact=? where patient_id = ?`,
      [data.email,data.first_name,data.last_name,data.other_name,data.contact1,data.contact2,data.sex, data.address, data.birth_date, data.relative_name, data.relative_contact, data.patient_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },  deleteallPatients: (data, callBack) => {
    pool.query(
      `truncate table patients`,
      [data.patient_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  
  deletePatients: (data, callBack) => {
    pool.query(
      `delete from patients where patient_id = ?`,
      [data.patient_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};