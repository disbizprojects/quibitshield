import Footer from "@/components/footer";
import SubscriptionForm from "@/components/form";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function page() {
  return (
    <div className="bg-black  flex flex-col   lg:relative">
      <div className="flex w-full gap-4 justify-end relative">
        {" "}
        <Link href="/login" className="">
          {" "}
          <Button className="grad rounded-full text-black w-32 ">Log In</Button>
        </Link>
      </div>
      <div className=" items-center justify-center h-full gap-4 2xl:mt-4  lg:flex ">
        <div className="2xl:w-[852px]   2xl:h-[700px] h-[500px] overflow-hidden flex items-center justify-center">
          <video
            className="w-full h-full"
            src="https://utfs.io/f/0c89a4fc-233e-4743-9a2f-a457b33f656b-x6zamt.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
        <div className="lg:w-[40%] flex flex-col gap-4">
          <h1 className="text-white lg:text-2xl text-xl text-wrap">
            Enhanced IoT, smart cities, payments & FinTech using advanced
            post-quantum cryptography and AI, fostering innovation and ensuring
            data sovereignty.{" "}
          </h1>
          <hr className="w-[50%] h-1  my-4 grad  border-0 rounded"></hr>
          <div className=" flex flex-col gap-4">
            <p>
              We have chosen to operate in stealth mode for the ﬁrst year while
              we build our cryptosystem and integrate it with select open-source
              software.
            </p>
            <p>
              For inquiries about investing, becoming a customer, joining our
              team, or anything else, please email us.
            </p>
            <p>
              We welcome your interest in our Post-Quantum Cryptographic
              solutions and are eager to help you learn more.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <SubscriptionForm></SubscriptionForm>
          </div>
          <div></div>
        </div>
      </div>

      <div className="lg:-mt-0  w-full lg:bottom-8">
        <Footer></Footer>
      </div>
    </div>
  );
}
