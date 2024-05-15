// import { PrismaClient } from "@prisma/client";
// import z from "zod";

// import { NextResponse } from "next/server";

// const prisma = new PrismaClient();

// const registerUserSchema = z.object({
//   password: z.string().min(10),
// });

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { password } = registerUserSchema.parse(body);
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = await prisma.user.create({
//       data: {
//         password: hashedPassword,
//       },
//     });

//     if (!newUser) {
//       return new NextResponse("Unauthorized", { status: 401 });
//     }

//     return new NextResponse("User Created", { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// }
