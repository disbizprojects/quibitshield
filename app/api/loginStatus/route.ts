import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// Set the runtime to Edge

const prisma = new PrismaClient();

interface RequestBody {
  id: string;
  name: string;
  ipAddress: string;
  os: string;
  device: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { id, name, ipAddress, os, device }: RequestBody = await req.json();

    // Check if the user status already exists
    const existingStatus = await prisma.login.findUnique({
      where: {
        statusId: id,
      },
    });

    if (existingStatus) {
      // Return conflict status if the record already exists
      return NextResponse.json(
        { message: "User status already exists" },
        { status: 409 }
      );
    } else {
      // Create a new user status record
      const updatedUserStatus = await prisma.login.create({
        data: {
          statusId: id,
          name: name,
          os: os,
          ipAddress: ipAddress,
          location: device,
        },
      });

      return NextResponse.json(
        { message: "User status updated successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error updating user status:", error);

    // Handle known Prisma errors
    if (error.code === "P1001") {
      return NextResponse.json(
        { message: "Cannot connect to the database server" },
        { status: 500 }
      );
    } else if (error.code === "P2002") {
      return NextResponse.json(
        { message: "Unique constraint violation" },
        { status: 409 }
      );
    } else {
      // Handle all other errors
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  }
}
