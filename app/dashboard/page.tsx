"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Page() {
  const data1 = [
    {
      header: <h1>The Impending Threat of Quantum Computing</h1>,
      paragraphs: [
        <p>
          "The rapid advancement of quantum computing technology poses a
          significant threat to the encryption methods currently used to
          safeguard sensitive information and secrets worldwide. While the exact
          timeline is uncertain, it is widely accepted that quantum computers
          will eventually overcome classical encryption techniques, rendering
          current methods obsolete."
        </p>,
        <p>
          The ability to break the current foundation of modern encryption will
          have serious implications for data security, undermining the ability
          to reliably protect confidential communications, financial
          transactions, and other critical information.
        </p>,
        <p>
          The inevitability of this quantum computing milestone means that
          organizations and individuals relying on encryption must prepare for a
          future where current methods are rendered ineffective. Developing new
          quantum-resistant, post-quantum cryptographic (PQC) techniques will be
          a crucial priority as this technological shift approaches.
        </p>,
      ],
    },
    {
      header: <h1>Our Initial Innovations</h1>,
      paragraphs: [
        <p>
          Our patent-pending PQC cryptosystem designed for IoT and payments
          utilizes LWE DLP IBE with TLS, embedded in WolfSSL and FIPS 204
          (Crystals Dilithium) Module-Lattice-Based Digital Signature Standard
          and it presents a novel and robust approach to security. This system
          offers several advantages over other post-quantum solutions for IOT,
          mission critical infrastructure and payments:
        </p>,
        <p>
          <b className="font-bold text-2xl">
            • Efficient Key Exchange Process:
          </b>{" "}
          The system's use of LWE DLP IBE for encrypting the initial Key
          Exchange of TLS streamlines the process by limiting the number of
          generated Private Keys, reducing operational costs.
        </p>,
        <p>
          <b className="font-bold text-2xl">• Enhanced Security:</b> By
          employing LWE DLP IBE for key exchange, the system ensures that both
          parties belong to the same trusted group, enhancing security and
          preventing unauthorized access.
        </p>,
        <p>
          <b className="font-bold text-2xl">• Authentication Mechanism:</b> The
          system utilizes the FIPS 204 (Crystals Dilithium) Module-Lattice-Based
          Digital Signature Standard to authenticate recipients, ensuring that
          each recipient has its own private key and certificate verified by the
          system CA, enhancing the overall security of the communication.
        </p>,
        <p>
          <b className="font-bold text-2xl">• Secure Device Communication:</b>{" "}
          The system facilitates secure communication between devices and
          gateways by encrypting data using attribute identities, ensuring that
          only legitimate devices can connect with the server.
        </p>,
        <p>
          <b className="font-bold text-2xl">• Simplified Deployment:</b> The
          system's approach to gateway/server to device communication
          acknowledges the challenge of deploying signature certificates to each
          device and offers a practical solution by using LWE DLP IBE with the
          ID attribute for key exchange within a trusted group, enhancing
          deployment feasibility.
        </p>,
        <p>
          <b className="font-bold text-2xl">• Hybrid Security Approach:</b> By
          combining elements like ECDH for generating key pairs and encrypting
          public parts with LWE DLP IBE, the system ensures a robust and secure
          final session key, providing a hybrid security approach that enhances
          overall system resilience.
        </p>,
        <p>
          Our cryptosystem's innovative use of LWE DLP IBE with TLS, embedded in
          WolfSSL and using the FIPS 204 (Crystals Dilithium)
          Module-Lattice-Based Digital Signature Standard, offers a
          comprehensive and secure solution, providing efficient key exchange,
          enhanced security measures, and practical deployment strategies that
          set it apart from other post-quantum solutions.
        </p>,
      ],
    },
    {
      header: (
        <h1>Securing Critical Applications with Post-Quantum Cryptosystem</h1>
      ),
      paragraphs: [
        <p>
          The threat of quantum computing extends to various mission-critical
          domains, making PQC a vital technology for ensuring security and
          resilience:
        </p>,
        <p>
          <b className="font-bold text-2xl">• IoT and Smart Cities:</b> Our
          cryptosystem's design, incorporating LWE DLP IBE with TLS and the FIPS
          204 (Crystals Dilithium) Module-Lattice-Based Digital Signature
          Standard, offers scalability crucial for the future demands of IoT and
          smart cities. As IoT devices and smart city infrastructure heavily
          depend on encryption to safeguard the extensive data they produce and
          share, the system's Post-Quantum Cryptography plays a pivotal role in
          ensuring the security of interconnected systems. This enhanced ability
          to scale is vital for securing various aspects of smart cities, from
          smart traffic management to energy grids and water distribution
          networks where the system's robust encryption mechanisms will be
          instrumental in safeguarding sensitive data and ensuring the integrity
          of critical infrastructure in the evolving landscape of IoT and smart
          cities.
        </p>,
        <p>
          <b className="font-bold text-2xl">
            • Mission Critical Infrastructure:
          </b>{" "}
          Power grids, transportation networks, and communication systems are
          examples of mission-critical infrastructure that must be protected
          from quantum-enabled attacks. Our PQC will be a vital tool in securing
          these vital systems against disruption. Presently, standards bodies
          such as ETSI and NCSC recommend pairing-based IBE for mission-critical
          infrastructure and they are stressing the importance of transitioning
          to post-quantum cryptography.
        </p>,
        <p>
          <b className="font-bold text-2xl">• Payments:</b> The financial
          sector, including digital payments requires robust encryption to
          protect sensitive transactions and data. Our system's use of LWE DLP
          IBE with TLS and the FIPS 204 (Crystals Dilithium)
          Module-Lattice-Based Digital Signature Standard for POS payment
          terminals offers superior security over pairing-based IBE with either
          a 1k or 4k key due to its efficient key exchange process, reduced
          resource requirements, and enhanced protection. This system ensures
          secure communication while optimizing resource utilization, making it
          more suitable for POS payment terminals with limited resources
          compared to the resource-intensive 6k key required by pairing-based
          IBE.
        </p>,
        <p>
          <b className="font-bold text-2xl">• FinTech/Blockchain:</b> By
          leveraging identities and attributes instead of relying solely on
          digital signatures throughout the blockchain process, with digital
          signatures used sparingly, we will introduce an innovative approach
          aimed at enhancing the performance and privacy of post-quantum
          blockchain systems. Our teams are actively developing a specialized
          blockchain cryptosystem that integrates LWE DLP IBE with TLS embedded
          in WolfSSL and the FIPS 204 (Crystals Dilithium) Module-Lattice-Based
          Digital Signature Standard, a proven strategy we have successfully
          designed for IoT and payment systems. This integrated solution offers
          a robust framework for post-quantum blockchains, striking a balance
          between security, privacy, and performance. The incorporation of TLS
          and WolfSSL components ensures secure communication, while the fusion
          with quantum-resistant algorithms fortifies the system against
          potential quantum threats. Our team is strategically planning a hybrid
          setup that merges the current cryptography used in modern blockchains
          with our post-quantum cryptosystem. This hybrid model will enable
          blockchain networks to harness the enhanced security and quantum
          resistance of our post-quantum cryptosystem on post-quantum ready
          blockchains, while maintaining seamless compatibility and
          interoperability with the existing blockchain ecosystem. This approach
          streamlines a smooth and controlled transition to post-quantum
          security, guaranteeing that blockchain networks remain resilient and
          adaptable in the face of evolving threats and technological
          advancements.
        </p>,
      ],
    },
    {
      header: <h1>Leveraging LWE IBE in Open-Source Solutions</h1>,
      paragraphs: [
        <p>
          The 2023 IoT & Edge Commercial Adoption Survey highlights the growing
          importance of open-source technologies in IoT and edge computing
          deployments, with 75% of organizations actively incorporating
          open-source into their plans. Harnessing the power of our
          lattice-based LWE DLP identity-based encryption (IBE) within popular
          open-source software used in IoT and FinTech is a strategic approach.
        </p>,
        <p>
          LWE DLP IBE offers several advantages over code-based PQC solutions,
          making it well-suited for IoT and peer-to-peer applications. LWE DLP
          IBE scales better and has lower computational overhead compared to
          code-based PQC, which is crucial for resource-constrained IoT devices.
          Additionally, the identity-based nature of LWE DLP IBE aligns well
          with the distributed, decentralized architectures common in IoT and
          FinTech systems.
        </p>,
        <p>
          By integrating LWE DLP IBE into open-source technologies like WolfSSL,
          which is widely used in IoT, and other software prevalent in IoT and
          FinTech, organizations can benefit from the cost advantages,
          flexibility, and customization capabilities of open-source, while also
          future-proofing their systems against the quantum computing threat.
        </p>,
      ],
    },
    {
      header: <h1>An Attractive Investment Opportunity</h1>,
      paragraphs: [
        <p>
          A company with innovative patents for LWE DLP IBE PQC, focused on
          securing critical applications in IoT, smart cities, critical
          infrastructure, payments, and FinTech, represents an attractive
          investment opportunity.
        </p>,
        <p>
          As governments and organizations worldwide recognize the urgency of
          preparing for the quantum computing threat, investment in post-quantum
          cryptographic soluti that can protect these vital systems will become
          increasingly appealing.
        </p>,
        <p>
          Furthermore, the company's expertise in lattice-based encryption and
          IBE techniques puts it at the forefront of post-quantum cryptographic
          development, offering a potential competitive advantage in a rapidly
          evolving market.
        </p>,
        <p>
          This combination of technological innovation, market focus, and the
          pressing need for post-quantum cryptographic solutions makes this an
          appealing investment opportunity.
        </p>,
        <p>
          The company has postponed establishing itself and filing its initial
          patents until it secures its first investor. This will enable them to
          explore all available options. Their current plan is to base the
          company in the UK due to the advantageous high-net-worth investor
          schemes that offer a clear path to securing their full funding.
          However, if they successfully secure a single investor willing to
          fully support their venture, they will not choose the UK and will
          instead consider alternative locations such as Ireland, the USA,
          Singapore, or Switzerland. The UK offers valuable resources for
          startups through initiatives like the Seed Enterprise Investment
          Scheme (SEIS) and the Enterprise Investment Scheme (EIS), which are
          government-supported programs aimed at assisting early-stage companies
          in raising capital by providing attractive tax incentives to
          individual investors.
        </p>,
      ],
    },
  ];
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // If user is not authenticated, redirect to login page
  if (!session) {
    // Example redirect to login page
    return (
      <div>
        Access Denied. Please <a href="/login">login</a> to view this page.
      </div>
    );
  }

  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://utfs.io/f/2b3b3987-bbf4-45fa-b3ee-f8d421b302cb-47qkr6.svg')`,
      }}
    >
      <div>
        <Image
          src="https://utfs.io/f/0ba271cb-ad24-4541-a7d5-a76acd52dd92-17tfp1.svg"
          width={300}
          height={100}
          alt="logo"
        ></Image>
      </div>
      <div className="py-10 flex flex-col gap-16">
        {data1.map((i) => (
          <div key={Math.random()} className="">
            <h1 className=" lg:text-4xl text-3xl ">{i.header}</h1>
            <hr className="w-[20%] h-1  my-4 grad  border-0 rounded"></hr>
            <div className="flex flex-col gap-8">
              {i.paragraphs.map((p) => (
                <p className="text-xl font-bold" key={Math.random()}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Button className="rounded-full grad text-black mx-auto">
          Click to open or download our deck
        </Button>
      </div>
      <div className="w-full flex justify-center mt-8">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-2 items-center">
            <IoMail className="grad w-9 h-9 p-1 rounded-full text-black" />
            <p>info@QubitShield.io</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaXTwitter className="grad w-9 h-9 p-1 rounded-full text-black" />
            <p>@QubitShield</p>
          </div>
        </div>
      </div>
    </div>
  );
}
