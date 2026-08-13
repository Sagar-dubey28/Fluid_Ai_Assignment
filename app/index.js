const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

app.get("/", (req, res) => {
  res.json({
    message: "DevOps Infrastructure Challenge API",
    status: "running",
  });
});

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT NOW()");
    res.status(200).json({ status: "healthy" });
  } catch (err) {
    res.status(500).json({
      status: "unhealthy",
      error: "Database connection failed",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});