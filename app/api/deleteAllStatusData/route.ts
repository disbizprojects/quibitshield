// pages/api/deleteAllData.js
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  try {
    await prisma.login.deleteMany(); // Add more models as necessary

    console.log("All data deleted successfully.");
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.error("Error deleting data:", error);
    return new NextResponse("Internal Error", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
