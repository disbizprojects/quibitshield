import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full lg:mt-[-10px] flex flex-col gap-4 lg:flex-row items-center">
        <div className=" w-full  lg:w-[600%]">
          {" "}
          <hr className=" h-[2px] border-none bg-gradient-to-r from-[#1fdcbd] to-[#248ef5]"></hr>
        </div>
        <div className="w-full flex lg:justify-end  justify-center p-4 mt-8">
          <div className="">
            <div className="flex  -mt-10 lg:flex-end justify-center   w-full gap-4 flex-col">
              <div className="flex gap-2 items-center">
                <IoMail className="grad w-9 h-9 p-1 rounded-full text-black" />
                <a href="mailto:info@QubitShield.io">info@QubitShield.io</a>
              </div>
              <div className="flex gap-2 items-center">
                <FaXTwitter className="grad w-9 h-9 p-1 rounded-full text-black" />
                <a href="https://twitter.com/QubitShield">@QubitShield</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:text-start text-center flex-col  lg:flex-row text-sm gap-2 lg:-mt-5">
        <p>Copyright @ 2024 QubitShield.io</p>
        <Link href="/policy" className="hover:underline">
          <p>Privacy Policy</p>
        </Link>
      </div>
    </div>
  );
}
