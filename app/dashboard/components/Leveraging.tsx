import Image from "next/image";
import React from "react";

export default function Leveraging() {
  return (
    <div className="flex justify-center flex-col  gap-8">
      <div className="flex lg:flex-row flex-col gap-4">
        <div className="lg:w-1/2 w-full overflow-hidden flex h-auto justify-center">
          <Image
            src="/7.png"
            width={500}
            height={500}
            alt="1"
            className="w-[400px] h-[400px] object-cover"
          ></Image>
        </div>
        <div className="lg:w-1/2 w-full">
          {" "}
          <h1 className=" lg:text-4xl text-3xl ">
            Leveraging QubitShield in Open-Source Solutions
          </h1>
          <hr className="w-[50%] h-2  my-4 grad  border-0 rounded"></hr>
          <div className="flex dashboard flex-col  justify-between items-center w-full  gap-8">
            <p className="  ">
              The 2023 IoT &amp; Edge Commercial Adoption Survey highlights the
              critical role of open-source technologies in IoT, Smart Cities,
              and mission-critical infrastructure, with 75% of organizations
              incorporating open-source into their strategies. Integrating our
              lattice-based Learning With Errors Identity-Based Encryption (LWE
              IBE) into these open-source solutions provides a strategic edge.
            </p>
            <p>
              LWE IBE excels in IoT and Smart City environments due to its
              scalability and low computational overhead, which are vital for
              resource-constrained devices. Its identity-based approach aligns
              seamlessly with the distributed and decentralized nature of these
              systems, enhancing both security and operational efficiency.
            </p>
          </div>
        </div>
      </div>

      <p>
        By embedding LWE IBE into open-source technologies like WolfSSL,
        organizations can leverage the cost advantages and customization of
        open-source solutions while securing their infrastructure against future
        quantum computing threats.
      </p>
    </div>
  );
}
