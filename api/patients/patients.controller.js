const {
  create,
  getpatientbyId,
  getpatientbyname,
  getpatients,
  updatePatients,
  deletePatients,
  deleteallPatients,

} = require("./patients.service");
// const { hash, genSalt, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var createHash = require("hash-generator");



module.exports = {
  createPatients: (req, res) => {
    const bod = req.body;

    create(bod, (err, results, hash1) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }

      if (!err) {
        console.log("successful");
        return res.status(200).json({
          success: 1,
          message: "created successfully",
          id: hash1,
        });
      }
    });
  },

  getpatientbynames: (req, res) => {
    const data = req.params;
   
    getpatientbyname(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      if (results.length ===0) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      console.log(results);
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  getpatientbyId: (req, res) => {
    const data = req.params;
   
    getpatientbyId(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      results.password = undefined;
      console.log(results);
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getpatients: (req, res) => {
    getpatients((err, results) => {
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

  updatepatients: (req, res) => {
    const body = req.body;

    updatePatients(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },




  deletepatient: (req, res) => {
    const data = req.body;

      deletePatients(data, (err, results) => {
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
  deleteallpatient: (req, res) => {
    const data = req.body;

      deleteallPatients(data, (err, results) => {
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

