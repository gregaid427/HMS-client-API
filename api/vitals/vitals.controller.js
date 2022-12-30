const {
  create,
  getvitalsbyId,
  getvitalsbyname,
  getvitals,
  updatevital,
  deletevitals,
  deleteallvitals,

} = require("./vitals.service");
// const { hash, genSalt, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var createHash = require("hash-generator");



module.exports = {
  createvitals: (req, res) => {
    const data = req.body;
   
    create(data, (err, results) => {
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
          data: results.vitals_id,
        });
      }
    });
  },

  // getvitalsbynames: (req, res) => {
  //  let data = req.body;
  //   data = {
  //     first : data.first_name ,
  //     last: data.last_name
  //   }
  //   console.log(data)
  //   getvitalsbyname(data, (err, results) => {
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

  getvitalsbyId: (req, res) => {
    const data = req.params;

    getvitalsbyId(data, (err, results) => {
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
  getvitals: (req, res) => {
    getvitals((err, results) => {
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

  updatevitals: (req, res) => {
    const body = req.body;
console.log(body)
    updatevital(body, (err, results) => {
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




  deletevitals: (req, res) => {
    const data = req.body;

      deletevitals(data, (err, results) => {
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
  deleteallvitals: (req, res) => {
    const data = req.body;

      deleteallvitals(data, (err, results) => {
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

