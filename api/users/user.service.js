const pool = require("../../config/database");
const crypto = require("crypto")
const bcrypt = require("bcrypt");
var createHash = require("hash-generator");

module.exports = {
  create: (data, callBack) => {
    var hash1 = createHash(7);
    pool.query(
     `insert into users (email,user_id,name,contact1,contact2,password,verified) values (?,?,?,?,?,?,'false')`,
                        [data.email,hash1,data.name,data.contact1,data.contact2, data.password],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
        
      }
    );
  },
  getUserroles: (email, callBack) => {
    pool.query(
      `select * from userroles where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from users where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserrolesByUserEmail: (email, callBack) => {
    pool.query(
      `SELECT * FROM users INNER JOIN userroles on users.email=userroles.email WHERE users.email =?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  checkUserEmailExist: (email, callBack) => {
    pool.query(
      `select email from users where email = ?  `,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (user_id, callBack) => {
    pool.query(
      `select * from users where user_id = ?`,
      [user_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select * from users`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update users set email=?,name=?,contact1=?,contact2=?,role=? where user_id = ?`,
      [
        data.email,
        data.name,
        data.contact1,
        data.contact2,
        data.role,
        data.user_id,
      
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updatePassword: (data, callBack) => {
    pool.query(
      `update users set password=? where email = ?`,
      [
       
        data.password,
        data.email
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateStatus: (data, callBack) => {
    pool.query(
      `update users set verified='True' where email = ?`,
      [
        data.email
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from users where user_id = ?`,
      [data],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
