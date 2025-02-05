import { NextResponse } from "next/server"
import mongoose from "mongoose"
import { dbConnect } from "@/lib/mongodb"

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
  { timestamps: true },
)

const Application = mongoose.models.Application || mongoose.model("Application", ApplicationSchema)

export async function POST(req: Request) {
  try {
    await dbConnect()

    const formData = await req.formData()
    const application = {
      fullName: formData.get("fullName"),
      address: formData.get("address"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      occupation: formData.get("occupation"),
      expectedAmount: formData.get("expectedAmount"),
      businessIdea: formData.get("businessIdea"),
    }

    const newApplication = new Application(application)
    await newApplication.save()

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error("Application submission error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}