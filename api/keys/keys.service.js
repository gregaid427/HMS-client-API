const pool = require("../../config/database");
const crypto = require("crypto")
const bcrypt = require("bcrypt");
var createHash = require("hash-generator");


module.exports = {
  create: (data, callBack) => {
    var hash1 = createHash(4);
    var hash2 = createHash(4);
    var hash3 = createHash(4);
    var hash = hash1+"-"+hash2+"-"+hash3
    var hashkey = createHash(7);
    pool.query(
     `insert into access_keys(user,institution,created_at,expire_at,procure_at,access_key,hash_id,status,revoked) values (?,?,?,?,?,?,?,'active','False')`,
            [data.user, data.institution,data.created_at,data.expire_at,data.procure_at,hash,hashkey],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
       
      }
    );
  },
  creatependingKey: (data, callBack) => {
    pool.query(
     `insert into requested_keys(user,institution,requested_at,status) values (?,?,?,'inactive')`,
            [data.user, data.institution,data.requested_at],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
       
      }
    );
  },
  getAllkeyByinstitution: (data, callBack) => {
    pool.query(
      `select * from access_keys where user = ? order by key_id desc   `,
      [data.email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getActivekeyByinstitution: (data, callBack) => {
    pool.query(
      `select * from access_keys where status = 'active' and user = ? `,
      [data.email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  checkActivekeyByinstitution: (data, callBack) => {
    pool.query(
      `select * from access_keys where status = 'active' and user = ? `,
      [data],
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
      `select * from admin where email = ?  `,
      [body.email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getkeyById: (id, callBack) => {
    pool.query(
      `select * from access_keys where key_id = ?   `,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getpendingkeyById: (id, callBack) => {
    pool.query(
      `select * from requested_keys where req_id = ?   `,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  pendingKey: ( callBack) => {
    pool.query(
      `select * from requested_keys where status = 'inactive' order by req_id desc  `,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getKey: callBack => {
    pool.query(
      `select * from access_keys order by key_id desc `,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  revoke: (data, callBack) => {
    pool.query(
      `update access_keys set status='inactive' , revoked='True' where key_id = ?`,
      [
        data.id
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
      `update access_keys set password=? where email = ?`,
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
      `update access_keys set verified='True' where email = ?`,
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
  deletepending: (data, callBack) => {
    pool.query(
      `delete from requested_keys where requested_keys.req_id = ? `,
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
