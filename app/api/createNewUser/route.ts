import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, password, role } = await req.json();

    const checkName = await prisma.user.findUnique({
      where: {
        name: name,
      },
    });

    if (checkName) {
      return new NextResponse("The username has already been taken", {
        status: 200,
      });
    } else {
      const userCreated = await prisma.user.create({
        data: {
          name: name,
          role: role,
          password: password,
        },
      });

      if (userCreated) {
        return new NextResponse("New User created", { status: 200 });
      } else {
        return new NextResponse("Something went wrong", { status: 500 });
      }
    }
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
