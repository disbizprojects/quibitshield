import { PrismaClient } from "@prisma/client";
import { Emails, columns } from "./columns";
import { DataTable } from "./data-table";

const prisma = new PrismaClient();

export default async function page() {
  const data = await prisma.user.findMany();

  return (
    <div className=" flex justify-center w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
