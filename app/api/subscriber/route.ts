import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function Get(req: NextRequest) {
  try {
    const { email } = await req.json();
    const allEmail = await prisma.emailCollection;
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
