import { PrismaClient } from "@prisma/client";
import { Emails, columns } from "./columns";
import { DataTable } from "./data-table";

// Create a new instance of PrismaClient
const prisma = new PrismaClient();

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Page() {
  // Fetch data from the Prisma Client
  const data = await prisma.emailCollection.findMany();

  // Return the DataTable component with the fetched data
  return (
    <div className="flex justify-center w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
