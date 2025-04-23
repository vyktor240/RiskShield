const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 5000;

// Configurare multer pentru încărcarea fișierelor
const upload = multer({
  dest: "uploads/", // Directorul pentru fișierele încărcate
  limits: { fileSize: 100 * 1024 * 1024 }, // Dimensiune maximă fișier 100MB
});

// Permite cereri CORS pentru dezvoltare
app.use(cors());

// Endpoint pentru încărcarea fișierelor audio
app.post("/upload", upload.single("audio"), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: "Nu s-a încărcat niciun fișier" });
  }
  res
    .status(200)
    .send({ message: "Fișier încărcat cu succes", file: req.file });
});

// Rularea serverului
app.listen(port, () => {
  console.log(`Serverul rulează pe http://localhost:${port}`);
});
