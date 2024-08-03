import Image from "next/image";
import React from "react";

export default function Embracing() {
  return (
    <>
      {" "}
      <div className="flex lg:flex-row-reverse flex-col-reverse gap-2    justify-center">
        <div className="lg:w-1/2">
          {" "}
          <h1 className=" lg:text-4xl text-3xl ">Embracing he Quantam Era</h1>
          <hr className="w-[50%] h-2  my-4 grad  border-0 rounded"></hr>
          <div className="flex dashboard flex-col lg:flex-row justify-between items-center w-full  gap-8">
            <p className="text-xl  font-bold">
              QubitShield is at the forefront of revolutionary change,
              pioneering advanced post-quantum cryptography (PQC) technologies
              to protect against the emerging quantum threat. Our comprehensive
              approach integrates advancements in multiple state-of-the-art
              cryptographic schemes, ensuring unparalleled security for IoT,
              critical infrastructure, financial systems, and more.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full overflow-hidden flex h-auto justify-center">
          <Image
            src="/2.jpg"
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
