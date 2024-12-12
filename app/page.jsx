import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return <main>
    <Hero/>
    <About/>
    <Services/>
    <Works/>
    <Reviews/>
    <Cta/>
  </main>;
}
