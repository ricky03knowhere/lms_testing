const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../config/db");

const router = express.Router();
const SECRET_KEY = "eldia&paradise";

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await db.query(
    "INSERT INTO Users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, hashedPassword, "participant"]
  );
  res.json({ message: "User registered" });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const [rows] = await db.query("SELECT * FROM Users WHERE email = ?", [email]);
  if (rows.length && (await bcrypt.compare(password, rows[0].password))) {
    const token = jwt.sign(
      { name: rows[0].name, email: rows[0].email },
      SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    res.json({ token, user: rows[0] });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
