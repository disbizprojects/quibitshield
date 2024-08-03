"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import UAParser from "ua-parser-js";
import useIpAddress from "../admin/loginInfo/useIpAddress";
import useDeviceInfo from "../admin/loginInfo/osFinder";
import { number } from "zod";
import { randomBytes } from "crypto";
import Prepare from "./components/Prepare";
import Embracing from "./components/Ebraceing";
import Advnaced from "./components/Advnaced";
import OurCutting from "./components/OurCutting";
import Secure from "./components/Secure";
import Leveraging from "./components/Leveraging";
import Attractive from "./components/Attractive";
export default function Page() {
  const { ipAddress, error } = useIpAddress();
  const deviceInfo = useDeviceInfo();

  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  const isAdmin = session?.user.role === "admin";

  // If user is not authenticated, redirect to login page
  if (!session && status === "unauthenticated") {
    // Example redirect to login page
    return (
      <div>
        Access Denied. Please{" "}
        <Link className="underline" href="/login">
          login
        </Link>{" "}
        to view this page.
      </div>
    );
  }

  function generateSecureRandomString(length: number): string {
    return randomBytes(length).toString("hex").substring(0, length);
  }

  const updatedUserStatus = async (): Promise<void> => {
    try {
      const response = await axios.post("/api/loginStatus", {
        id: generateSecureRandomString(10),
        name: session.user.name,
        ipAddress: ipAddress,
        os: deviceInfo.os,
        device: deviceInfo.device,
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(
          "Error updating user status:",
          error.response.data.message
        );
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  updatedUserStatus();
  return (
    <div className="bg-cover bg-no-repeat p-4">
      <div className=" flex justify-between">
        <Link href="/">
          {" "}
          <div className=" ">
            <Image
              src="https://utfs.io/f/0ba271cb-ad24-4541-a7d5-a76acd52dd92-17tfp1.svg"
              width={400}
              height={300}
              alt="logo"
              className="lg:w-[400px] w-[200px]"
            ></Image>
          </div>
        </Link>

        <div className="flex lg:flex-row flex-col-reverse gap-2 items-center gap-x-8">
          <a
            href="https://utfs.io/f/9d528147-0cba-4e8c-a290-53d3d79c483f-b5vi6f"
            download
          >
            <Button className="rounded-full grad text-black mx-auto">
              Click to open or download our deck
            </Button>
          </a>
          {isAdmin && (
            <Link href="/admin/subscriber">
              <Button className=" rounded-full grad text-black mx-auto  ">
                Admin Panel
              </Button>
            </Link>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger className="border-none">
              <div className=" text-center flex flex-col justify-center items-center">
                <FaUser className="w-9 h-9 text-sky-500"></FaUser>{" "}
                <p>{session?.user.name}</p>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[400px] h-[200px] text-2xl">
              <DropdownMenuLabel className=" text-2xl">
                {session?.user.name}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <h4 className="text-xl">User role : {session?.user.role}</h4>{" "}
              </DropdownMenuItem>

              <DropdownMenuItem>
                {" "}
                <Button
                  className="grad"
                  onClick={() => signOut({ redirect: false })}
                >
                  <MdLogout className="w-9 h-9"></MdLogout> <h4>Logout</h4>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="py-10 flex flex-col gap-16">
        <Prepare></Prepare>
        <Embracing></Embracing>
        <Advnaced></Advnaced>
        <OurCutting></OurCutting>
        <Secure></Secure>
        <Leveraging></Leveraging>
        <Attractive></Attractive>
      </div>
      <div className="w-full flex justify-center">
        <a
          href="https://utfs.io/f/9d528147-0cba-4e8c-a290-53d3d79c483f-b5vi6f"
          download
        >
          <Button className="rounded-full grad text-black mx-auto">
            Click to open or download our deck
          </Button>
        </a>
      </div>
      <div className="w-full flex justify-center mt-8">
        <div className="flex gap-4 flex-col">
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
  );
}
