import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Policy() {
  return (
    <div
      className="privacy bg-cover bg-no-repeat flex  flex-col gap-4"
      style={{
        backgroundImage: `url('https://utfs.io/f/2b3b3987-bbf4-45fa-b3ee-f8d421b302cb-47qkr6.svg')`,
      }}
    >
      <Link href="/">
        <div className="w-full flex     lg:justify-start  justify-center">
          <Image
            src="https://utfs.io/f/0ba271cb-ad24-4541-a7d5-a76acd52dd92-17tfp1.svg"
            width={300}
            height={100}
            alt="logo"
          ></Image>
        </div>
      </Link>

      <div>
        <h1 className="lg:text-8xl text-4xl ">Privacy Policy</h1>
        <p>
          Our privacy policy was written to help you understand how we handle
          "Personally identifiable information," which is information that can
          be used on its own or with other information to identify, contact, or
          locate a single person, or to identify an individual. Please read our
          privacy policy carefully to get a clear understanding of how we
          collect, use, protect or otherwise handle your Personally Identifiable
          Information in accordance with our website.
        </p>
      </div>
      <div>
        <h1>
          What Personal Information Do We Collect from the People That Visit Our
          Website?
        </h1>
        <p>
          Like most websites, QubitShield.io collects non-personally-identifying
          information of the sort that web browsers and servers typically make
          available, such as the browser type, language preference, referring
          site, and the date and time of each visitor request. Our purpose in
          collecting non-personally identifying information is to better
          understand how visitors use our website. We also collect information
          like Internet Protocol (IP) addresses. We do not use such information
          to identify visitors and we do not disclose such information to third
          parties unless legally obliged to do so.
        </p>
        <p>
          When registering or submitting a form on our web site, as appropriate,
          you may be asked to enter your password or email address. See below on
          what happens with that data.
        </p>
      </div>

      <div>
        <h1>When Do We Collect Information?</h1>
        <h2> On our website:</h2>
        <p>
          We collect information from you when you fill out a form or enter
          information on our site.
        </p>
      </div>

      <div>
        <h1>How Do We Use Your Information?</h1>
        <p>
          We may use the information we collect from our website visitors in the
          following ways:
        </p>
        <ul>
          <li className="flex items-center">
            <Dot></Dot>To improve our website in order to better serve visitors.
          </li>
          <li className=" flex items-center">
            <Dot></Dot>
            If you supply us with an email address, we may use it to send
            periodic emails regarding our business and technology, and to follow
            up after correspondence.
          </li>
        </ul>
      </div>
      <div>
        <h1>How do we protect visitor information?</h1>
        <p>
          Your personal information is contained behind secured networks and is
          only accessible by a limited number of people who have special access
          rights to such systems, and are required to keep the information
          confidential. In addition, all sensitive information you supply is
          encrypted via Transport Layer Security (TLS) technology.
        </p>
        <p>
          We implement a variety of security measures when a user enters,
          submits, or accesses their information, to maintain the safety of
          personal information.
        </p>
      </div>
      <div>
        <h1>Use of Essential Cookies</h1>
        <p>
          {" "}
          Our website uses essential cookies, also known as strictly necessary
          cookies, to ensure the proper functioning of the site. These cookies
          are vital for providing online services and facilitating communication
          over the network. Essential cookies are automatically placed on your
          device when you access our website and are exempt from the requirement
          of consent as per the GDPR and ePrivacy Directive
        </p>

        <h1>Third-party disclosure</h1>
        <p>
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to outside parties unless we provide users
          with advance notice. This does not include website hosting partners
          and other parties who assist us in operating our website, conducting
          our business, or serving our users, so long as those parties agree to
          keep this information confidential. We may also release information
          when its release is appropriate to comply with the law, enforce our
          policies, or protect ours or others' rights, property or safety.
        </p>

        <p>
          However, non-personally identifiable visitor information may be
          provided to other parties for marketing, advertising, or other uses.
          Think aggregated statistics (number of website visitors in a
          particular month) or trends (e.g., If we see an increase in the number
          of visitors from a particular country, or region).
        </p>
      </div>

      <div>
        <h1>Third-party links</h1>
        <p>
          We do not include or offer third-party products or services on our
          website
        </p>
      </div>
      <div>
        <h1>Contact</h1>
        <p>
          If there are any questions regarding this policy you may contact ys at
          info@QubitShield.io{" "}
        </p>
      </div>
      <div>
        <h1 className="title">Privacy Policy Changes</h1>
        <p>
          Although most changes are likely to be minor, we may change this
          Privacy Policy from time to time and at our sole discretion. We
          encourage visitors to frequently check this page for any changes to
          our Privacy Policy. Your continued use of this site after any change
          in this Privacy Policy will constitute your acceptance of such change.
        </p>
        <div className="text-xs ">Last Edited on August 1, 2024.</div>
      </div>
    </div>
  );
}
