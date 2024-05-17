import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full lg:mt-[-10px] flex flex-col gap-4 lg:flex-row items-center">
        <hr className="w-[95%] h-[1px] my-4 grad border-0 rounded" />
        <div className="flex gap-2 lg:flex-col">
          <a href="mailto:info@QubitShield.io">
            <IoMail className="grad w-9 h-9 p-1 rounded-full text-black" />
          </a>
          <a href="https://twitter.com/QubitShield">
            <FaXTwitter className="grad w-9 h-9 p-1 rounded-full text-black" />
          </a>
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
