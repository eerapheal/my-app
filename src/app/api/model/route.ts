import mongoose from "mongoose";

// Define the schema
const ApplicationSchema = new mongoose.Schema(
  {
    fullName: String,
    address: String,
    email: String,
    phone: String,
    occupation: String,
    expectedAmount: Number,
    businessIdea: String,
  },
  { timestamps: true }
);

// Create or reuse the model
export const Application =
  mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);
