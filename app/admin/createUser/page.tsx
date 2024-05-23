"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";

type User = {
  id: number;
  name: string;
  password: string;
  role: string;
};

export default function Page() {
  const { toast } = useToast();
  const [data, setData] = useState<User | null>(null);
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUpdate = async () => {
    try {
      const response = await axios.post("/api/createNewUser", {
        name,
        password,
        role,
      });
      setData(response.data);
      toast({ description: response.data });
      redirect("/admin/user");
    } catch (error) {
      console.error("Error creating user:", error);
      toast({ description: "Failed to create user", variant: "destructive" });
    }
  };

  return (
    <div className="flex justify-center flex-col items-center w-full text-center gap-4">
      <h1 className="text-2xl">Create New User</h1>
      <div className="flex flex-col gap-4">
        <div>
          <Label>User Name</Label>
          <Input
            className="text-black text-center"
            placeholder="Enter user name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <Label>Password</Label>
          <Input
            className="text-black text-center"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Label>Role</Label>
          <Select onValueChange={(value) => setRole(value)}>
            <SelectTrigger className="text-black">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent className="text-black">
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button onClick={handleUpdate} className="grad rounded-full text-black">
        Create User
      </Button>
    </div>
  );
}
