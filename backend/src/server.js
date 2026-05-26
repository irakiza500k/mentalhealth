import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import sequelize from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import postRoutes from "./routes/postRoutes.js";


// LOAD ENV VARIABLES

dotenv.config();


// CREATE APP

const app = express();


// =========================
// MIDDLEWARE
// =========================

app.use(cors({

  origin: "http://localhost:5173",

  credentials: true

}));


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(helmet());

app.use(morgan("dev"));


// =========================
// TEST ROUTE
// =========================

app.get("/", (req, res) => {

  res.status(200).json({

    success: true,

    message: "Backend server working on port 8000"

  });

});


// =========================
// AUTH ROUTES
// =========================

app.use("/api/auth", authRoutes);


// =========================
// AI ROUTES
// =========================

app.use("/api/ai", aiRoutes);


// =========================
// APPOINTMENT ROUTES
// =========================

app.use("/api/appointments", appointmentRoutes);


// =========================
// FORUM ROUTES
// =========================

app.use("/api/posts", postRoutes);


// =========================
// 404 HANDLER
// =========================

app.use((req, res) => {

  res.status(404).json({

    success: false,

    message: "Route not found"

  });

});


// =========================
// DATABASE + SERVER
// =========================

const PORT = process.env.PORT || 8000;


sequelize.sync()
  .then(() => {

    console.log("MySQL Database Connected");

    app.listen(PORT, () => {

      console.log(`Server running on port ${PORT}`);

    });

  })

  .catch((error) => {

    console.log("DATABASE ERROR:");

    console.log(error);

  });