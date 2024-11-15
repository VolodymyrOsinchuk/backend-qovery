require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// import DB Sequelize
// const sequelize = require("./config/db");

const app = express();

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

// const testDbConnection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// testDbConnection();
