import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const deletedEmail = await prisma.emailCollection.delete({
      where: {
        id: Number(id),
      },
    });

    if (deletedEmail) {
      return NextResponse.json(
        { message: "Email Deleted Successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "Email Not Found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error deleting email:", error);
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  }
}
