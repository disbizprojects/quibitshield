import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (user) {
      return NextResponse.json(user, { status: 200 });
    } else {
      return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  }
}
