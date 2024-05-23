import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest) {
  try {
    const { id, name, password } = await req.json();

    if (!id || !name || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, password },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  }
}
