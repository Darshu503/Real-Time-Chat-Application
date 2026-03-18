import dotenv from "dotenv";
dotenv.config(); // Load environment variables

import express from "express";
import { connectDB } from "./lib/db.js";

const app = express();

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
