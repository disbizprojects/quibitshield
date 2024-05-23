import { PrismaClient } from "@prisma/client";
import { Emails, columns } from "./columns";
import { DataTable } from "./data-table";

const prisma = new PrismaClient();

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function page() {
  const data = await prisma.emailCollection.findMany();

  return (
    <div className=" flex justify-center w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
