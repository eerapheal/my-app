import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { dbConnect } from "@/lib/mongodb";

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
const Application =
  mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);

export async function GET() {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Fetch all applications
    const applications = await Application.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, data: applications },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
