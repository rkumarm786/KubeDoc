import express from "express";
import { pool } from "./database";
import cors from "cors";

const app = express();
const port = 3000;

// Enable All CORS Requests
app.use(cors());

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
