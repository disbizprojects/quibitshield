"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import React, { FormEvent, useState } from "react";

export default function Page() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const password = form.get("password") as string;

    try {
      const result = await signIn("credentials", {
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Error during sign in:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div className="items-center justify-center h-full gap-4 lg:flex">
        <div className="lg:w-[852px] lg:h-[700px] h-[500px] overflow-hidden flex items-center justify-center">
          <video
            className="w-full h-full"
            src="https://utfs.io/f/0c89a4fc-233e-4743-9a2f-a457b33f656b-x6zamt.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="lg:text-4xl text-2xl grad bg-clip-text text-transparent inline-block">
            Welcome!
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <div className="grad p-[1.5px] h-8 rounded-full">
                <Input
                  name="password"
                  type="password"
                  placeholder="ENTER PASSWORD"
                  className="w-full border-none rounded-full h-full bg-black"
                ></Input>
              </div>
              <div>
                {error && (
                  <div className="text-red-500 text-sm mt-2">
                    Password Incoreect
                  </div>
                )}
              </div>
              <Button
                type="submit"
                className="mx-auto grad rounded-full text-black"
              >
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
