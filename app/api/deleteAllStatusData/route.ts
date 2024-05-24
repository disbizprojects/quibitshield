import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  try {
    // Delete all records in the EmailCollection model
    await prisma.login.deleteMany();
    return NextResponse.json(
      { message: "All records deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete records" },
      { status: 500 }
    );
  }
}
