"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import { ArrowUpDown, Delete } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { MdChangeCircle } from "react-icons/md";

// Define the type for subscriber data
export type Emails = {
  id: number;
  name: string;
  role: string;
};
// Function to delete a subscriber by ID

// Define the columns for the table
const useDeleteSubscriber = () => {
  const router = useRouter();
  const { toast } = useToast();
  return useCallback(
    async (id: number) => {
      try {
        await axios.delete("/api/deleteUser", {
          data: { id }, // Ensure the correct payload is sent
        });
        toast({ description: " Deleted Successfully" });
        router.refresh();
      } catch (error) {
        toast({ description: "Internal Error", variant: "destructive" });
        console.error("Failed to delete user:", error);
      }
    },
    [router]
  );
};

export const columns: ColumnDef<Emails>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    header: "Action",
    cell: ({ row }) => {
      // Extract the ID from the row data
      const id = row.original.id;

      return (
        // Call deleteSubscriber on click

        <Link href={`/admin/changePassword/${id}`}>
          <Button className="grad text-black">
            {" "}
            <MdChangeCircle className="" />
            Change
          </Button>
        </Link>
      );
    },
  },
  {
    header: "Action",
    cell: ({ row }) => {
      const deleteSubscriber = useDeleteSubscriber();
      // Extract the ID from the row data
      const id = row.original.id;

      return (
        <Button
          className="bg-red-500"
          onClick={() => deleteSubscriber(Number(id))} // Call deleteSubscriber on click
        >
          <Delete className="w-9 h-9" />
          Delete
        </Button>
      );
    },
  },
];
