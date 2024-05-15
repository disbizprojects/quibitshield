import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const checkEmail = await prisma.emailCollection.findUnique({
      where: {
        email: email,
      },
    });

    if (checkEmail) {
      return new NextResponse("The email has already been taken", {
        status: 409,
      });
    } else {
      const newEmailCollection = await prisma.emailCollection.create({
        data: {
          email: email as string,
        },
      });
      if (newEmailCollection) {
        return new NextResponse("Email collection created", { status: 200 });
      } else {
        return new NextResponse("Something wrong", { status: 500 });
      }
    }
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
