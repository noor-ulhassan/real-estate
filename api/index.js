import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});
