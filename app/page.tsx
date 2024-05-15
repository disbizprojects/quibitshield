import { Button } from "@/components/ui/button";

import React from "react";
import { Input } from "@/components/ui/input";
import Footer from "@/components/footer";
import Link from "next/link";
import SubscriptionForm from "@/components/form";

export default function page() {
  return (
    <div className="bg-black  flex flex-col gap-4">
      <div className="flex w-full justify-end">
        <Link href="/login">
          {" "}
          <Button className="grad rounded-full text-black w-32 ">Log In</Button>
        </Link>
      </div>
      <div className=" items-center justify-center h-full gap-4  lg:flex ">
        <div className="lg:w-[852px] lg:h-[800px] h-[500px] overflow-hidden  flex items-center  ">
          <video
            src="https://utfs.io/f/0c89a4fc-233e-4743-9a2f-a457b33f656b-x6zamt.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="lg:w-[40%] flex flex-col gap-4">
          <h1 className="text-white lg:text-2xl text-xl">
            Enhanced IoT, smart cities, payments & FinTech using advanced
            post-quantum cryptography and AI, fostering innovation and ensuring
            data sovereignty.{" "}
          </h1>
          <hr className="w-[50%] h-1  my-4 grad  border-0 rounded"></hr>
          <div className=" flex flex-col gap-4">
            <p>
              We have chosen to operate in stealth mode for the ﬁrst year while
              we build our cryptosystem and integrate it with select open-source
              software.
            </p>
            <p>
              For inquiries about investing, becoming a customer, joining our
              team, or anything else, please email us.
            </p>
            <p>
              We welcome your interest in our Post-Quantum Cryptographic
              solutions and are eager to help you learn more.
            </p>
          </div>
          <SubscriptionForm></SubscriptionForm>
          <div></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
