require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();
const userRouter = require("./api/users/user.router");
const adminRouter = require("./api/admin/admin.router");
const keysRouter = require("./api/keys/keys.router");
const patientsRouter = require("./api/patients/patients.router");
const vitalsRouter = require("./api/vitals/vitals.router");
const logRouter = require("./api/log/log.router");
const consultRouter = require("./api/consult/consult.router");
const productRouter = require("./api/product/product.router");

app.use(express.json());
app.use(cors())
// app.use(function(req,res,next){
// res.header("Access-Control-Allow","*");
// res.header("Access-Control-Allow-Headers","X-Requested-With");
// })
app.use("/api/product", productRouter);
app.use("/api/users", userRouter);
app.use("/api/consult", consultRouter);
// app.use("/api/projects", projectRouter);
app.use("/api/admin", adminRouter);
app.use("/api/keys", keysRouter);
app.use("/api/patients", patientsRouter);
app.use("/api/vitals", vitalsRouter);
app.use("/api/log", logRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
