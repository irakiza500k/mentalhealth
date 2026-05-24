import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import sequelize from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();


// ================= MIDDLEWARE =================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));


// ================= ROUTES =================

app.get("/", (req, res) => {

  res.json({
    success: true,
    message: "Backend connected to MySQL successfully"
  });

});

app.use("/api/auth", authRoutes);


// ================= DATABASE =================

sequelize.sync()
  .then(() => {

    console.log("✅ MySQL Connected");

    app.listen(8000, () => {

      console.log(
        "✅ Server running on http://localhost:8000"
      );

    });

  })
  .catch((error) => {

    console.log(error);

  });