import { type NextRequest, NextResponse } from "next/server";
import { initDatabase, getStats } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    await initDatabase();

    const stats = await getStats();

    return NextResponse.json({
      success: true,
      stats,
    });
  } catch (error) {
    console.error("Get stats error:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
