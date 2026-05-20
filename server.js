const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Gally3D active");
});

app.post("/contact", (req, res) => {
  console.log(req.body);

  res.json({
    success: true,
    message: "Demande reçue",
  });
});

app.listen(5000, () => {
  console.log("Serveur lancé sur port 5000");
});