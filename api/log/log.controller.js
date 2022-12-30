const {
  create,
  getlogs,
  deletelog,
  deletealllog
 

} = require("./log.service");
// const { hash, genSalt, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var createHash = require("hash-generator");



module.exports = {



  createlog: (req, res) => {
    const bod = req.body;
    // const datenow = new Date;
    // month = datenow.getMonth();
    // console.log(month)
    create(bod, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error - not logged",
        });
      }

      if (!err) {
        console.log(err);
        return res.status(200).json({
          success: 0,
          message: "logged successfully",
          data: results.log_id,
        });
      }  
    });
  },

  getlog: (req, res) => {
    const data = req.body;
    getlogs(data ,(err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },


  deletelog: (req, res) => {
    const data = req.body;

      deletelog(data, (err, results) => {
        if (err) {
          success: 0,
          console.log(err);
          return;
        }

        return res.json({
          success: 1,
          message: "deleted successfully",
        });
      });
   
  },
  deletealllog: (req, res) => {
    const data = req.body;

      deletealllog(data, (err, results) => {
        if (err) {
          success: 0,
          console.log(err);
          return;
        }

        return res.json({
          success: 1,
          message: "deleted successfully",
        });
      });
   
  },

};

