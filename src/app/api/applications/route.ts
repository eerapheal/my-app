import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import { Application } from "../model/route";

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
