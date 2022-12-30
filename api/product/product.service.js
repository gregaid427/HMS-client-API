const pool = require("../../config/database");
const crypto = require("crypto")
const bcrypt = require("bcrypt");
var createHash = require("hash-generator");

module.exports = {
  create: (data, callBack) => {
  
    const datenow = new Date;
    pool.query(
     `insert into product (product_id,supplier_id,product_name,stock_qty,date,price,description,wholesale_price,info, user_id) values (?,?,?,?,?,?,?,?,?,?)`,
  [data.hash1 ,data.hash2 ,data.product_name, data.stock_qty,datenow ,data.price,data.description,data.wholesale_price,data.info ,data.user_id ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
        
      }
    );
  },
  createsupplier: (data, callBack) => {
  
    const datenow = new Date;
    pool.query(
     `insert into supplier (supplier_id,supplier,contact1,contact2,contact3,notes) values (?,?,?,?,?,?)`,
  [data.supplier_id ,data.supplier, data.contact1,data.contact2,data.contact3,data.notes ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
        
      }
    );
  },
  // getproductbyname: (data, callBack) => {
  //   pool.query(
  //     `select * from product where first_name  = ? or last_name  = ? `,
  //     [data.first,data.last],
  //     (error, results, fields) => {
  //       if (error) {
  //         callBack(error);
  //       }
  //       return callBack(null, results);
  //     }
  //   );
  // },
  
  getproductbyId: (data, callBack) => {
    pool.query(
      `select * from product where product_id = ?`,
      [data.product_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getsuppliersId: (data, callBack) => {
    pool.query(
      `select * from supplier where supplier_id = ?`,
      [data.supplier_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getproduct: callBack => {
    pool.query(
      `select * from product`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getsuppliers: callBack => {
    pool.query(
      `select * from supplier`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updateproducts: (data, callBack) => {
    pool.query(
      `update product set product_name=?,stock_qty=?,price=?,description=? ,info=? , wholesale_price=? where product_id=? `,
      [data.product_name,data.stock_qty,data.price,data.description,data.info,data.wholesale_price,data.product_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updatesuppliers: (data, callBack) => {
    pool.query(
      `update supplier set supplier=?,contact1=?,contact2=?,contact3=? ,notes=?  where supplier_id=? `,
      [data.supplier,data.contact1,data.contact2,data.contact3,data.notes,data.supplier_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }, 
  deleteallsuppliers: (data, callBack) => {
    pool.query(
      `truncate table supplier`,
      [data.supplier_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  
  deleteallproduct: (data, callBack) => {
    pool.query(
      `truncate table product`,
      [data.product_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  
  deleteproducts: (data, callBack) => {
    pool.query(
      `delete from product where product_id = ?`,
      [data.product_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deletesupplierid: (data, callBack) => {
    pool.query(
      `delete from supplier where supplier_id = ?`,
      [data.supplier_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};