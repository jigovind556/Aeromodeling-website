const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "aeromodellingdb.cs0gg5mbtn2b.ap-south-1.rds.amazonaws.com",
  password: "Shivam114",
  database: "aero_db",
});

//this function is to verify account
app.post("/getInfo", (req, res) => {
  try {
    db.query("select * from info ;", (err, result) => {
      if (err) {
        console.log(err.sqlMessage);
        res.status(102).send(new Error(err.sqlMessage));
      } else {
        console.log(result);
        res.send(result);
      }
    });
  } catch (error) {
    res.status(102).send(new Error("some error occured"));
  }
});

app.post("/putInfo", (req, res) => {
  try {
    console.log(req.body);

    const Address_L1 = req.body.Address_L1;
    const Address_L2 = req.body.Address_L2;
    const Area_code = req.body.Area_code;
    const City = req.body.City;
    const Email = req.body.Email;
    const FName = req.body.FName;
    const LName = req.body.LName;
    const PIN_code = req.body.PIN_code;
    const Paid_status = req.body.Paid_status;
    const Phone_No = req.body.Phone_No;
    const Quantity_ordered = req.body.Quantity_ordered;
    const State = req.body.State;
    const T_shirt_size = req.body.T_shirt_size;
    const delivery_status = req.body.delivery_status;

    db.query(
      "INSERT INTO info ( Address_L1, Address_L2, Area_code,City,Email,FName,LName,PIN_code,Paid_status,Phone_No,Quantity_ordered,State,T_shirt_size,delivery_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?);",
      [
        Address_L1,
        Address_L2,
        Area_code,
        City,
        Email,
        FName,
        LName,
        PIN_code,
        Paid_status,
        Phone_No,
        Quantity_ordered,
        State,
        T_shirt_size,
        delivery_status,
      ],
      (err, result) => {
        if (err) {
          console.log(err.sqlMessage);
          res.status(102).send(new Error(err.sqlMessage));
        } else {
          res.send("success");
        }
      }
    );
  } catch (error) {
    res.status(102).send(new Error("some error occured"));
  }
});
app.post("/putCheckInfo", (req, res) => {
  try {
    console.log(req.body);

    const Address_L1 = req.body.Address_L1;
    const Address_L2 = req.body.Address_L2;
    const Area_code = req.body.Area_code;
    const City = req.body.City;
    const Email = req.body.Email;
    const FName = req.body.FName;
    const LName = req.body.LName;
    const PIN_code = req.body.PIN_code;
    // const Paid_status = req.body.Paid_status;
    const Phone_No = req.body.Phone_No;
    // const Quantity_ordered = req.body.Quantity_ordered;
    const State = req.body.State;
    // const T_shirt_size = req.body.T_shirt_size;
    // const delivery_status = req.body.delivery_status;

    db.query(
      "UPDATE info SET Address_L1= ?, Address_L2= ?, Area_code= ?,City= ?,FName= ?,LName= ?,PIN_code= ?,Phone_No= ?,State= ? WHERE email=?;",
      [
        Address_L1,
        Address_L2,
        Area_code,
        City,
        FName,
        LName,
        PIN_code,
        // Paid_status,
        Phone_No,
        // Quantity_ordered,
        State,
        // T_shirt_size,
        // delivery_status,
        Email,
      ],
      (err, result) => {
        if (err) {
          console.log(err.sqlMessage);
          res.status(102).send(new Error(err.sqlMessage));
        } else {
          res.send("success");
        }
      }
    );
  } catch (error) {
    res.status(102).send(new Error("some error occured"));
  }
});

app.post("/ceateUser", (req, res) => {
  try {
    console.log(req.body);

    const Email = req.body.Email;
    const Password = req.body.Password;

    db.query(
      "INSERT INTO info ( Email,Password) VALUES (?,?);",
      [Email, Password],
      (err, result) => {
        if (err) {
          console.log(err.sqlMessage);
          res.status(102).send(new Error(err.sqlMessage));
        } else {
          res.send("success");
        }
      }
    );
  } catch (error) {
    res.status(102).send(new Error("some error occured"));
  }
});

app.post("/checkuser", (req, res) => {
  try {
    console.log(req.body);

    const Email = req.body.Email;

    db.query("SELECT * FROM info WHERE email=?;", [Email], (err, result) => {
      if (err) {
        console.log(err.sqlMessage);
        res.status(102).send(new Error(err.sqlMessage));
      } else {
        console.log(result);
        res.send(result);
      }
    });
  } catch (error) {
    res.status(102).send(new Error("some error occured"));
  }
});

app.post("/getproduct", (req, res) => {
  try {

    db.query("SELECT * FROM Product_detail ;",  (err, result) => {
      if (err) {
        console.log(err.sqlMessage);
        res.status(102).send(new Error(err.sqlMessage));
      } else {
        console.log(result);
        res.send(result);
      }
    });
  } catch (error) {
    res.status(102).send(new Error("some error occured"));
  }
});


app.listen(3001, () => {
  console.log("stated successfully");
});
