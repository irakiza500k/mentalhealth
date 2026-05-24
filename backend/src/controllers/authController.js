import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";


// ================= REGISTER =================

export const register = async (req, res) => {

  try {

    const {
      username,
      email,
      password
    } = req.body;

    // Check existing user
    const existingUser = await User.findOne({
      where: { email }
    });

    if (existingUser) {

      return res.status(400).json({
        success: false,
        message: "User already exists"
      });

    }

    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    // Create user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Registration successful",
      user
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

};


// ================= LOGIN =================

export const login = async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body;

    // Find user
    const user = await User.findOne({
      where: { email }
    });

    if (!user) {

      return res.status(404).json({
        success: false,
        message: "User not found"
      });

    }

    // Compare passwords
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });

    }

    // Generate token
    const token = jwt.sign(
      {
        id: user.id
      },
      "supersecretkey",
      {
        expiresIn: "7d"
      }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

};