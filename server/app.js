import express from "express";
import cors from "cors";

import studentRoutes from "./routes/studentRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import courseRoutes from "./routes/courseRoutes.js"

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use('/api/courses', courseRoutes)

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Student Management API Running",
  });
});

export default app;