import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import React from "react";

export default function page() {
  return (
    <div>
      <div className="items-center justify-center h-full gap-4  lg:flex">
        <div className="lg:w-[852px]  lg:h-[700px] h-[500px] overflow-hidden  flex items-center justify-center ">
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
          <p className="lg:text-3xl text-2xl">Sign In To Your Account</p>
          <div className="flex flex-col gap-3">
            <div className="grad w-full  p-[1.5px] h-8 rounded-full ju">
              <Input className="w-full border-none   rounded-full h-full bg-black"></Input>
            </div>
            <div className="grad   p-[1.5px] h-8 rounded-full ju">
              <Input className="w-full border-none   rounded-full h-full bg-black"></Input>
            </div>
            <Link href="/dashboard" className="mx-auto">
              <Button className="mx-auto grad rounded-full text-black">
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
