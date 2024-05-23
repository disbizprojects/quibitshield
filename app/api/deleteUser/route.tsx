import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const deletedUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    if (deletedUser) {
      return NextResponse.json(
        { message: "User Deleted Successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error deleting email:", error);
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  }
}
