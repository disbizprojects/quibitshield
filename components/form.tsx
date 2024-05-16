"use client";
import React, { useState } from "react";
import { z, ZodError } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

// Define the email schema
const emailSchema = z.string().email();

interface SubscriptionFormData {
  email: string;
}

const SubscriptionForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<SubscriptionFormData>({ email: "" });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const parsedData = emailSchema.parse(formData.email); // Parse data using emailSchema
      const email = await axios.post("/api/email", {
        email: parsedData,
      });
      if (email) {
        toast({
          variant: "default",
          description: email.data,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Subscription Failed",
        });
      }
    } catch (error) {
      if (error instanceof ZodError) {
        setError(error.issues[0].message); // Set error message
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <h1 className="lg:text-4xl text-2xl bg-gradient-to-r from-[#1fdcbd] via-[#248ef5] to-[#000103] bg-clip-text text-transparent inline-block">
            SUBSCRIBE
          </h1>
          <p className="lg:text-3xl text-xl">To Get The Latest Updates</p>
          <div className="mt-2 flex gap-2 items-center">
            <div className="grad  w-[50%] p-[1.5px] h-8 rounded-full ju">
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter valid email address"
                className="w-full border-none   rounded-full h-full bg-black"
              ></Input>
              {error && <p className="error">{error}</p>}
            </div>
            <Button className="text-black font-bold grad rounded-full  font-[Axiforma-thin] ">
              Subscribe
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;
