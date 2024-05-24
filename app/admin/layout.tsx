"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const isAdmin = session?.user?.role === "admin";

  // If user is not authenticated or not an admin, redirect to login page
  if (!session || !isAdmin) {
    return (
      <div>
        Access Denied. You are not the admin. Please{" "}
        <Link className="underline" href="/login">
          login
        </Link>{" "}
        to view this page.
      </div>
    );
  }

  const sidebarButtons = [
    {
      name: "Subscriber List",
      link: "/admin/subscriber/",
    },
    {
      name: "Login Information List",
      link: "/admin/loginInfo/",
    },
    {
      name: "Users",
      link: "/admin/users",
    },
  ];

  return (
    <div>
      <div className=" flex justify-between">
        <Link href="/">
          {" "}
          <div className=" ">
            <Image
              src="https://utfs.io/f/0ba271cb-ad24-4541-a7d5-a76acd52dd92-17tfp1.svg"
              width={300}
              height={100}
              alt="logo"
            ></Image>
          </div>
        </Link>

        <div className="flex items-center gap-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="border-none">
              <div className=" text-center flex flex-col justify-center items-center">
                <FaUser className="lg:w-9 lg:h-9 w-4 h-4 text-sky-500"></FaUser>{" "}
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
                  <MdLogout className="lg:w-9  lg:h-9"></MdLogout>{" "}
                  <h4>Logout</h4>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="">
        <h1 className="lg:text-4xl text-3xl">Admin Panel</h1>
        <hr className="w-[20%] h-1 my-4 grad border-0 rounded"></hr>
        <div className="lg:hidden py-4">
          <Sheet>
            <SheetTrigger>
              <Menu></Menu>
            </SheetTrigger>
            <SheetContent side="left" className="bg-black">
              <Link href="/">
                {" "}
                <div className=" ">
                  <Image
                    src="https://utfs.io/f/0ba271cb-ad24-4541-a7d5-a76acd52dd92-17tfp1.svg"
                    width={300}
                    height={100}
                    alt="logo"
                  ></Image>
                </div>
              </Link>
              <div className="w-[280px] lg:block  h-full flex flex-col gap-4 p-4">
                {sidebarButtons.map((i) => (
                  <Link href={i.link}>
                    <Button className="grad text-black w-full">{i.name}</Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="hidden lg:block">
          <div className="w-[280px]    border-r h-full flex flex-col gap-4 p-4">
            {sidebarButtons.map((i) => (
              <Link href={i.link}>
                <Button className="grad text-black w-full">{i.name}</Button>
              </Link>
            ))}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
