import { type NextRequest, NextResponse } from "next/server";
import { authenticateUser, createSession } from "@/lib/auth";
import connectDB from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB
    await connectDB();

    const { username, password } = await request.json();

    console.log("[v0] Login attempt for username:", username);

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    const user = await authenticateUser(username, password);

    if (!user) {
      console.log("[v0] Authentication failed for username:", username);
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    console.log("[v0] Authentication successful for:", username);

    const token = createSession(user.id);

    return NextResponse.json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    console.error("[v0] Login error:", error);
    return NextResponse.json(
      {
        error: "Login failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
