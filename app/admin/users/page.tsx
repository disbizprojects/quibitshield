import { PrismaClient } from "@prisma/client";
import { Emails, columns } from "./columns";
import { DataTable } from "./data-table";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const prisma = new PrismaClient();

export default async function page() {
  const data = await prisma.user.findMany();

  return (
    <div className=" flex justify-center w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
