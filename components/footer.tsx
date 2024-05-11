import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {" "}
      <div className="w-full flex flex-col gap-4 lg:flex-row items-center mt-16">
        <hr className="w-[95%] h-[1px] my-4 grad border-0 rounded"></hr>
        <div className="flex gap-2 lg:flex-col">
          <Link href="info@QubitShield.io">
            {" "}
            <IoMail className="grad w-9 h-9 p-1 rounded-full text-black" />
          </Link>
          <Link href="https://twitter.com/qubitbyqubit?lang=en"></Link>
        </div>
      </div>
      <div className=" flex md:text-start text-center flex-col lg:flex-row text-sm gap-4 ">
        <p>Copyright @ 2024 QubitShield.io</p>
        <Link href="/policy" className="hover:underline">
          {" "}
          <p>Privacy Policy</p>
        </Link>
      </div>
    </>
  );
}
