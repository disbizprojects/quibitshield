"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import React, { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  password: string;
};

export default function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState<User | null>(null);
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleUpdate = async () => {
    try {
      if (data) {
        const response = await axios.patch("/api/changeData", {
          params: {
            id: params.id,
            name,
            password,
          },
        });
        setData(response.data);
        alert("User updated successfully");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user");
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/fetchUser`, {
          params: { id: params.id },
        });
        const userData: User = response.data;
        setData(userData);
        setName(userData.name);
        setPassword(userData.password);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [params]);

  return (
    <div className="flex justify-center flex-col items-center w-full text-center gap-4">
      <h1 className=" text-2xl  ">Change User Name And Password</h1>
      <div className=" flex flex-col gap-4">
        <div className="">
          <Label>User Name</Label>
          <Input className="text-black text-center" placeholder={name}></Input>
        </div>
        <Label>Password</Label>
        <Input
          className="text-black text-center"
          placeholder={password}
        ></Input>
      </div>
      <Button onClick={handleUpdate} className="grad rounded-full text-black">
        Change Password
      </Button>
    </div>
  );
}
