import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// database conenction
connectDB();

app.use("/api/student", studentRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
