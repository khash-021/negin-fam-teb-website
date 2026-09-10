import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { GradesStrip } from "@/components/sections/GradesStrip";
import { WhyUs } from "@/components/sections/WhyUs";
import { FacilitySnapshot } from "@/components/sections/FacilitySnapshot";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <GradesStrip />
        <WhyUs />
        <FacilitySnapshot />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
