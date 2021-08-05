const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from qovery");
});

app.get("/api", (req, res) => {
  res.json({ message: "API qovery" });  
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Porte est lance sur port ${PORT}`);
});
