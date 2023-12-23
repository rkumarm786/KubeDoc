import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "database-container",
  database: "testing_db",
  password: "raj",
  port: 5432,
});

// You can add more database-related functions here
