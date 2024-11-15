require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { Client } = require("pg");

const app = express();

// DB postgress connection
//const client =  new Client();
//client.connect();

//const res = client.query(`SELECT $1:: text as message`, ['Hello world']);
//console.log("res >>>>",res[0]);
//client.end();

app.get("/", (req, res) => {
  res.send("Hello from qovery");
});

app.get("/api", (req, res) => {
  res.json({ message: "API qovery" });
});

app.use(express.static("public"));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Porte est lance sur port ${PORT}`);
});
