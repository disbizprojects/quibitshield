"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import { ArrowUpDown, Delete } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import useFormattedLocalTime from "./time";

// Define the type for subscriber data
export type Emails = {
  id: number;
  name: string;
  os: string;
  ipAddress: string;
  location: string;
  createdAt: any;
};
// Function to delete a subscriber by ID
const useDeleteSubscriber = () => {
  const router = useRouter();
  const { toast } = useToast();
  return useCallback(
    async (id: number) => {
      try {
        await axios.delete("/api/deleteStatus", {
          data: { id }, // Ensure the correct payload is sent
        });
        toast({ description: "Deleted Successfully" });
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
    accessorKey: "createdAt",
    header: "Logged in",
    cell({ row }) {
      return useFormattedLocalTime(row.original.createdAt);
    },
  },
  {
    accessorKey: "ipAddress",
    header: "IP ADDRESS",
  },
  {
    accessorKey: "os",
    header: "OS",
  },
  {
    accessorKey: "location",
    header: "Devices",
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
