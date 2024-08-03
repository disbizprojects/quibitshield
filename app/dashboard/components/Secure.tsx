import Image from "next/image";
import React from "react";
import Bullet from "./Bullet";

export default function Secure() {
  const feature = [
    {
      feature: "Wallet Security",
      description:
        "Our PQC schemes offer enhanced protection for digital wallets, ensuring secure storage and transactions.",
    },
    {
      feature: "Unified Ledgers",
      description:
        "Integrating programmed messages within hidden channels enhances the functionality of unified ledgers and smart contracts, automating processes and improving compliance.",
    },
    {
      feature: "Secure Smart Contract Approvals",
      description:
        "Our PQC schemes ensure the authenticity and integrity of smart contract approvals, strengthening financial operations.",
    },
    {
      feature: "Privacy with Zero-Knowledge Proofs",
      description:
        "Leveraging zero-knowledge proofs, our solutions enable private transactions and secure data verification, crucial for maintaining confidentiality in Web3 applications and financial operations. ZKPs provide a method to prove knowledge of a fact without revealing the fact itself, enhancing privacy and trust in decentralized systems.",
    },
  ];
  return (
    <div>
      <main className="flex flex-col gap-8">
        <section>
          <h1 className=" lg:text-4xl text-3xl ">
            Securing Critical Applications with QubitShield
          </h1>
          <hr className="w-[50%] h-2  my-4 grad  border-0 rounded"></hr>
        </section>
        <section className="flex lg:flex-row items-center flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p>
              <b className="text-lg mr-2">IoT and Smart Cities:</b>
              Our cryptosystems, featuring advanced PQC schemes, are designed to
              scale and protect data across smart infrastructure. They ensure
              the security of smart traffic and transportation systems, energy
              grids, and water networks, providing robust encryption that adapts
              to the demands of interconnected environments.
            </p>
            <p>
              <b className="text-lg mr-2">Mission-Critical Infrastructure:</b>
              Our PQC solutions safeguard essential systems like power grids and
              communication networks from quantum-enabled threats. Endorsed by
              industry standards, our cryptosystems secure vital infrastructure
              against potential disruptions.
            </p>
            <p>
              <b className="text-lg mr-2">Payments:</b>
              In the financial sector, our PQC technology upholds the integrity
              of digital transactions and data. By leveraging efficient key
              exchange and robust encryption and authentication schemes, our
              systems enhance the security of POS terminals and online payments,
              optimizing resource use and defending against quantum attacks.
            </p>
          </div>
          <div className="lg:w-1/2 w-full overflow-hidden flex h-auto justify-center">
            <Image
              src="/6.jpg"
              width={500}
              height={500}
              alt="1"
              className="w-[400px] h-[400px] object-cover"
            ></Image>
          </div>
        </section>
        <section>
          <div>
            <b className="text-lg mr-2">IoT and Smart Cities:</b>
            <div className="ml-4">
              {feature.map((i) => (
                <p className="text-lg">
                  <span className=" font-[Axiforma-heavy]">
                    <Bullet></Bullet>
                    {i.feature}:
                  </span>
                  <span> {i.description}</span>
                </p>
              ))}
            </div>
          </div>
        </section>
        <section className="flex gap-4 flex-col">
          <p>
            <b className="text-lg mr-2">
              Government and Diplomatic Communications:
            </b>
            Our cryptosystems secure sensitive governmental and diplomatic
            communications, providing encryption and authentication schemes to
            protect against espionage and unauthorized access.
          </p>
          <p>
            <b className="text-lg mr-2">Military Applications:</b>
            Our technology supports covert operations with secure, undetectable
            communication channels, ensuring that secret data remains
            confidential and protected.
          </p>
          <p>
            <b className="text-lg mr-2">
              Multi-Cloud Environments and Data Fabric:
            </b>
            Integrating our PQC and hidden channels with multi-cloud
            environments and data fabric technologies enhances data security and
            integrity across interconnected systems, supporting complex data
            management and protection strategies.
          </p>
        </section>
      </main>
    </div>
  );
}
