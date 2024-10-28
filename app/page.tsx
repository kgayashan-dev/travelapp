import Image from "next/image";
import Hero from "./component/Hero";
import GetApp from "./component/GetApp";
import Features from "./component/Features";
import Guide from "./component/Guide";
import Camp from "./component/Camp";
export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
