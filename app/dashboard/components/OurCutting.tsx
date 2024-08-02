import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function OurCutting() {
  const feature1 = [
    {
      name: "Manage Identity Orders",
      description:
        "Directly carry instructions on the order of IBE identities, ensuring dynamic and reliable identity verification.",
    },
    {
      name: "Streamline Key Management",
      description:
        "Facilitate key revocation and reissuance, improving overall security and operational efficiency.",
    },
    {
      name: "Optimize Authentication",
      description:
        "Embed authentication processes within the channel, saving time and energy, and speeding up systems.",
    },
    {
      name: "Direct Secure Communications",
      description:
        "Route systems to secure servers for detailed instructions, making sensitive data available only to those with heightened authority (e.g., health and financial data).",
    },
    {
      name: "Enforce Procedural Steps",
      description:
        "Provide detailed instructions for actions that need to be taken before events are authorized, supporting applications like smart contracts and digital voting.",
    },
    {
      name: "Support Covert Operations",
      description:
        "Offer covert channels for military and government use, ensuring secure and undetectable communication.",
    },
  ];

  const feature2 = [
    {
      feature: "On-the-Fly Adaptability",
      description:
        "Identities can be dynamically reordered and verified in real-time, ensuring up-to-date and secure identity management.",
    },
    {
      feature: "Enhanced Security",
      description:
        "The constant evolution of identities makes it significantly harder for malicious actors to compromise the system.",
    },
    {
      feature: "Simplified Key Management",
      description:
        "Our approach reduces the complexity of key management by enabling flexible and reliable identity verification across different usage boundaries.",
    },
    {
      feature: "Improved Scalability",
      description:
        "The ability to handle dynamic identities makes our solution highly scalable and adaptable to diverse security needs in IoT and Smart City environments.",
    },
  ];
  return (
    <>
      {" "}
      <main className="flex flex-col gap-8">
        <section className="flex lg:flex-row flex-col w-full">
          <div className="lg:w-[70%] flex flex-col gap-4">
            {" "}
            <h1 className=" lg:text-4xl text-3xl ">
              Our Cutting-Edge Innovations
            </h1>
            <i className="text-xl">Innovating Beyond Standards</i>
            <hr className="w-[50%] h-2  my-4 grad  border-0 rounded"></hr>
            <p>
              While adhering to industry standards is crucial, QubitShield goes
              further. Our patent-pending innovations enhance these foundational
              technologies, providing unique advantages:
            </p>
            <strong className="flex text-xl">
              <Dot></Dot>Utilizing Hidden Channels for Comprehensive
              Cryptographic Functionality
            </strong>
            <p>
              Our innovative use of hidden channels enables a range of advanced
              functionalities by embedding meta-data within random seeds and
              transformations (e.g., Fujisaki-Okamoto). This sophisticated
              approach not only enhances security and functionality but also
              offers unprecedented control and efficiency. Our hidden channels
              within Kyber, Saber, IBE, McEliece and more can:
            </p>
          </div>
          <div className="lg:w-1/2 w-full overflow-hidden flex h-auto justify-center">
            <Image
              src="/4.jpg"
              width={500}
              height={500}
              alt="1"
              className="w-[400px] h-[400px] object-cover"
            ></Image>
          </div>
        </section>
        <section className="lg:w-[70%]">
          {feature1.map((i) => (
            <p className="">
              <b className="text-lg">
                <b className="  font-extrabold">.</b>
                {i.name}:
              </b>
              <span> {i.description}</span>
            </p>
          ))}
          <p className="mt-10">
            This multifaceted utilization of hidden channels fortifies our
            cryptosystems against quantum attacks, ensuring robust security
            while enhancing system performance and functionality.
          </p>
        </section>
        <section className="flex flex-col gap-8">
          <strong className="flex text-xl">
            <Dot></Dot>Dynamic Identity Management: Revolutionizing IBE Security
            with Adaptive Identities
          </strong>
          <p>
            Our pioneering method for Coalescing Unordered Sub-Identities within
            Identity-Based Encryption (IBE) offers a significant advantage in
            IoT security by enabling dynamic, changeable ordered identities.
            This innovative approach ensures consistent and reliable identity
            verification across various systems while enhancing flexibility and
            security.
          </p>
          <div>
            <h1 className="text-lg">Adaptive Identity Management</h1>
            <p>
              Our proprietary method leverages a dynamic and combinatorial
              approach to coalesce unordered sub-identities, creating
              ever-changing ordered identities that bolster system security. By
              utilizing commutative grouping and construction, we can generate
              ordered, consistent derivative identities from various
              combinations of sub-identities. This dynamic identity management
              ensures that identities are continually evolving, providing robust
              protection against identity spoofing and unauthorized access.
            </p>
          </div>
          <div>
            <h1 className="text-lg">Key Advantages</h1>
            {feature2.map((i) => (
              <p className="">
                <b className="text-sm">{i.feature}:</b>
                <span> {i.description}</span>
              </p>
            ))}
          </div>
        </section>
        <section>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-[70%]">
              <div>
                <h1 className="text-lg">
                  Why Invest In Post-Quantum Cryptography?
                </h1>
                <p>
                  The transition to PQC is not just a necessity; it is an
                  inevitability. As quantum computers evolve, the urgency for
                  adopting PQC becomes ever more critical. Governments worldwide
                  are beginning to mandate these new cryptographic standards,
                  creating a burgeoning market for PQC solutions. Investing in
                  QubitShield means aligning with the future of data security
                  and tapping into a market poised for exponential growth.
                </p>
              </div>
              <div>
                <h1 className="text-lg">The Financial Opportunity</h1>
                <p>
                  The global shift towards PQC presents a massive financial
                  opportunity. With industries racing to secure their data
                  against quantum threats, the demand for advanced cryptographic
                  solutions will surge. QubitShield&#39;s innovative approach
                  and adherence to emerging standards position us as a leader in
                  this burgeoning market. Investors have the chance to be part
                  of this transformative journey, capitalizing on the necessity
                  for quantum-resistant security.
                </p>
              </div>
            </div>
            <div className="lg:w-[50%] w-full  overflow-hidden flex h-auto justify-center">
              <Image
                src="/5.jpg"
                width={500}
                height={500}
                alt="1"
                className="w-[400px] h-[400px] object-cover"
              ></Image>
            </div>
          </div>
          <div>
            <h1 className="text-lg">Partner with QubitShield</h1>
            <p>
              As we approach the quantum era, the need for robust, future-proof
              security solutions has never been more urgent. QubitShield is
              committed to pioneering the next generation of cryptographic
              technologies, ensuring data security in a quantum world. Our
              solutions are designed to meet the highest standards, offering
              enhanced security, scalability, and practical deployment
              strategies.{" "}
            </p>
          </div>
          <p className="mt-10">
            Join us in securing the future. Partner with QubitShield and invest
            in the forefront of post- quantum cryptography.
          </p>
        </section>
      </main>
    </>
  );
}
