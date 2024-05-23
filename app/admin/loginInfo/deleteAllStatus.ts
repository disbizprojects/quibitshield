import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function deleteAllData(): Promise<{
  success: boolean;
  message: string;
}> {
  try {
    // Delete data from all necessary models
    await prisma.login.deleteMany({});
    // Add more delete statements for other models if necessary

    console.log("All data deleted successfully.");
    return { success: true, message: "All data deleted successfully" };
  } catch (error) {
    console.error("Error deleting data:", error);
    return { success: false, message: "Error deleting data" };
  } finally {
    await prisma.$disconnect();
  }
}
