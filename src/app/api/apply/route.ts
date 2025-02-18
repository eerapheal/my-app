import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import { Application } from "../model/route";

export async function POST(req: Request) {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Parse the form data
    const formData = await req.json();

    // Create a new application object
    const application = {
      fullName: formData.fullName,
      address: formData.address,
      email: formData.email,
      phone: formData.phone,
      occupation: formData.occupation,
      expectedAmount: Number(formData.expectedAmount), // Ensure it's a number
      businessIdea: formData.businessIdea,
    };

    // Save the application to the database
    const newApplication = new Application(application);
    await newApplication.save();

    // Return a success response
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
