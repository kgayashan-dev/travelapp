import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS } from "@/constants";
import { FOOTER_CONTACT_INFO } from "@/constants";
import { SOCIALS } from "@/constants";
const Footer = () => {
  return (
    <section className="flexCenter mb-24 ">
      <div className="padding-container max-container flex w-full flex-col gap-14 ">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row ">
          <Link href={"/"} className="mb-10">
            <Image src={"hilink-logo.svg"} alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 ">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30 ">
                  {columns.links.map((link) => (
                    <Link href={"/"} key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5 ">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row "
                  >
                    <p className="whitespace-npwrap"> {link.label}</p>
                    <p className="medium-14  whitespace-npwrap text-blue-70 ">
                      {" "}
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5 ">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex flex-row gap-4 text-gray-30 ">
                  {SOCIALS.links.map((link) => (
                    <Link href={"/"} key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20  " />
        <p className="regualar-14 w-full text-center text-gray-30 ">
          2024 higlink | all rightd reserved!
        </p>
      </div>
    </section>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};
const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="bold-18 whitespace-nowrap">{title}</h1>
      {children}
    </div>
  );
};

export default Footer;
