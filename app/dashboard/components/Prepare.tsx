import Image from "next/image";
import React from "react";

export default function Prepare() {
  return (
    <>
      {" "}
      <div className="flex justify-center flex-col-reverse lg:flex-row gap-8">
        <div className="lg:w-1/2 w-full">
          {" "}
          <h1 className=" lg:text-4xl text-3xl ">
            Preparing for the Quantum Revolution
          </h1>
          <hr className="w-[50%] h-2  my-4 grad  border-0 rounded"></hr>
          <div className="flex dashboard flex-col lg:flex-row justify-between items-center w-full  gap-8">
            <p className="text-xl  font-bold">
              As quantum computing rapidly advances, the looming threat it poses
              to current encryption and authentication methods becomes
              increasingly clear. In a world where quantum computers can
              effortlessly break classical cryptography, the need for robust,
              quantum-resistant cryptographic solutions is paramount. This
              inevitable shift underscores a pressing mandate for organizations
              and governments to adopt post-quantum cryptography (PQC). For
              investors, this transition represents an extraordinary financial
              opportunity, as the demand for next-generation security solutions
              skyrockets.
            </p>
          </div>
        </div>
        <div className="lg:w- w-full overflow-hidden flex h-auto justify-center">
          <Image
            src="/1.jpg"
            width={500}
            height={500}
            alt="1"
            className="w-[400px] h-[400px] object-cover"
          ></Image>
        </div>
      </div>
    </>
  );
}
