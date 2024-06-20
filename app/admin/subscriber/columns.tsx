"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import { ArrowUpDown, Delete } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import useFormattedLocalTime from "../loginInfo/time";

// Define the type for subscriber data
export type Emails = {
  id: number;
  email: string;
  sendedAt: string;
};
// Function to delete a subscriber by ID
const useDeleteSubscriber = () => {
  const router = useRouter();
  const { toast } = useToast();
  return useCallback(
    async (id: number) => {
      try {
        await axios.delete("/api/deleteSubscriber", {
          data: { id }, // Ensure the correct payload is sent
        });
        toast({ description: "Email Deleted Successfully" });
        router.refresh();
      } catch (error) {
        toast({ description: "Internal Error", variant: "destructive" });
        console.error("Failed to delete subscriber:", error);
      }
    },
    [router]
  );
};

// Define the columns for the table
export const columns: ColumnDef<Emails>[] = [
  //   {
  //     id: "select",
  //     header: ({ table }) => (
  //       <Checkbox
  //         checked={
  //           table.getIsAllPageRowsSelected() ||
  //           (table.getIsSomePageRowsSelected() && "indeterminate")
  //         }
  //         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //         aria-label="Select all"
  //       />
  //     ),
  //     cell: ({ row }) => (
  //       <Checkbox
  //         checked={row.getIsSelected()}
  //         onCheckedChange={(value) => row.toggleSelected(!!value)}
  //         aria-label="Select row"
  //       />
  //     ),
  //     enableSorting: false,
  //     enableHiding: false,
  //   },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "sendedAt",
    header: "Date Joined",
    cell({ row }) {
      return useFormattedLocalTime(row.original.sendedAt);
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
          onClick={() => deleteSubscriber(id)} // Call deleteSubscriber on click
        >
          <Delete className="w-9 h-9" />
          Delete
        </Button>
      );
    },
  },
];
