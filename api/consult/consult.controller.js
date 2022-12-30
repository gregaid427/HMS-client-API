const {
  create,
  getconsultbyId,
  getconsult,
  updateconsults,
  deleteconsult,
  deleteallconsult,

} = require("./consult.service");
// const { hash, genSalt, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var createHash = require("hash-generator");



module.exports = {
  createconsult: (req, res) => {
    const bod = req.body;

    create(bod, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }

      if (!err) {
        console.log(err);
        return res.status(200).json({
          success: 0,
          message: "created successfully",
          // data: results.consult_id,
        });
      }
    });
  },

  // getconsultbynames: (req, res) => {
  //  let data = req.body;
  //   data = {
  //     first : data.first_name ,
  //     last: data.last_name
  //   }
  //   console.log(data)
  //   getconsultbyname(data, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     if (!results) {
  //       return res.json({
  //         success: 0,
  //         message: "Record not Found",
  //       });
  //     }
 
  //     return res.json({
  //       success: 1,
  //       data: results,
  //     });
  //   });
  // },

  getconsultbyId: (req, res) => {
    const data = req.params;

    getconsultbyId(data, (err, results) => {
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
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getconsult: (req, res) => {
    getconsult((err, results) => {
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

  updateconsult: (req, res) => {
    const body = req.body;

    updateconsults(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        console.log(err);
        return res.json({
          success: 0,
          message: "Unable to update",
      })
    } else{

      console.log(results);
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    }
     
   
    
    });
  },




  deleteconsult: (req, res) => {
    const data = req.body;

      deleteconsult(data, (err, results) => {
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
  deleteallconsult: (req, res) => {
    const data = req.body;

      deleteallconsult(data, (err, results) => {
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

