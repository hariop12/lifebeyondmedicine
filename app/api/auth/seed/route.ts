import { type NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import getUserModel from "@/lib/models/User";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Seed endpoint called");

    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      console.error("[v0] MONGODB_URI not found in environment");
      return NextResponse.json(
        { error: "MONGODB_URI is not configured" },
        { status: 500 }
      );
    }

    console.log(
      "[v0] MONGODB_URI found:",
      MONGODB_URI.substring(0, 20) + "..."
    );
    console.log("[v0] Connecting to MongoDB...");

    await mongoose.connect(MONGODB_URI);
    console.log("[v0] Connected to MongoDB successfully");

    console.log("[v0] Getting User model...");
    const User = await getUserModel();
    console.log("[v0] User model loaded");

    // Check if admin already exists
    console.log("[v0] Checking for existing admin...");
    const existingAdmin = await User.findOne({ username: "admin" });

    if (existingAdmin) {
      console.log("[v0] Admin already exists");
      return NextResponse.json({
        success: false,
        message: "Admin user already exists",
        username: "admin",
      });
    }

    console.log("[v0] Creating new admin user...");
    // Create default admin
    const admin = new User({
      username: "admin",
      password: "admin123",
      email: "admin@lifebeyondmedicine.com",
      name: "Administrator",
      role: "admin",
    });

    console.log("[v0] Saving admin to database...");
    await admin.save();
    console.log("[v0] Admin created successfully");

    return NextResponse.json({
      success: true,
      message: "Admin user created successfully",
      credentials: {
        username: "admin",
        password: "admin123",
      },
    });
  } catch (error) {
    console.error("[v0] Seed error:", error);
    console.error(
      "[v0] Error stack:",
      error instanceof Error ? error.stack : "No stack trace"
    );
    return NextResponse.json(
      {
        error: "Failed to seed admin",
        details: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
