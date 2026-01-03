import { type NextRequest, NextResponse } from "next/server";
import { initDatabase, getContent, updateContent } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    await initDatabase();

    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page");
    const section = searchParams.get("section");

    let content = await getContent(page || undefined);

    if (section) {
      content = content.filter((c) => c.section === section);
    }

    return NextResponse.json({
      success: true,
      content,
    });
  } catch (error) {
    console.error("Get content error:", error);
    return NextResponse.json(
      { error: "Failed to fetch content" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await initDatabase();

    const { page, section, content_key, content_value } = await request.json();

    const updated = await updateContent(
      page,
      section,
      content_key,
      content_value
    );

    return NextResponse.json({ success: true, content: updated });
  } catch (error) {
    console.error("Save content error:", error);
    return NextResponse.json(
      { error: "Failed to save content" },
      { status: 500 }
    );
  }
}
