import Image from "next/image";
import React from "react";

export default function Attractive() {
  return (
    <div className="flex justify-center flex-col  gap-8">
      <div className="flex flex-col lg:flex-row-reverse gap-4">
        <div className="lg:w-1/2 w-full overflow-hidden flex h-auto justify-center">
          <Image
            src="/8.jpg"
            width={500}
            height={500}
            alt="1"
            className="w-[400px] h-[400px] object-cover"
          ></Image>
        </div>
        <div className="lg:w-1/2 w-full">
          {" "}
          <h1 className=" lg:text-4xl text-3xl ">
            An Attractive Investment Opportunity
          </h1>
          <hr className="w-[50%] h-2  my-4 grad  border-0 rounded"></hr>
          <div className="flex dashboard flex-col  justify-between items-center w-full  gap-8">
            <p className="  ">
              With innovative patents pending, we are advancing the FIPS 203
              Module-Lattice-Based Key Encapsulation Mechanism Standard, as well
              as several near-standardized post-quantum cryptographic schemes,
              QubitShield focuses on securing applications in IoT, smart cities,
              critical infrastructure, payments, and Web3/FinTech. This
              represents an attractive investment opportunity.
            </p>
            <p>
              As governments and organizations worldwide recognize the urgency
              of preparing for Q-Day, the point in time when quantum computers
              will be able to break current cryptographic systems—investment in
              post-quantum cryptographic solutions to protect these vital
              systems will become increasingly appealing.
            </p>
            <p>
              Furthermore, our team&#39;s expertise in post-quantum cryptography
              and applied cryptographic techniques across hardware,
              semiconductors, and software positions us at the forefront of
              post-quantum cryptographic development. This offers a significant
              competitive advantage in a rapidly evolving market.
            </p>
          </div>
        </div>
      </div>

      <p>
        This combination of technological innovation, market focus, and the
        pressing need for post-quantum cryptographic solutions makes this an
        appealing investment opportunity.
      </p>
{/*       <p>
        The company has filed its initial two patents and is now seeking its
        first round of investment. We anticipate needing $8,000,000 over the
        next two years, with half of the investment required now and the
        remaining half in twelve months.
      </p> */}
      <p>
        As quantum computing advances and Q-Day approaches, the market for
        post-quantum cryptographic solutions is set to explode. QubitShield is
        strategically positioned to capitalize on this rapid growth with our
        pioneering technologies and innovative approach. Investing in
        QubitShield presents a unique opportunity to be at the forefront of a
        high-growth sector with substantial profit potential. With our initial
        patents filed and a clear, scalable roadmap, your investment will fuel
        our expansion in a market poised for unprecedented demand. Seize the
        chance to profit from the next wave of critical security solutions and
        partner with QubitShield as we lead the charge in the burgeoning field
        of post-quantum cryptography.
      </p>
    </div>
  );
}
