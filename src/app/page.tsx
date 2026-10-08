import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { GradesStrip } from "@/components/sections/GradesStrip";
import { Applications } from "@/components/sections/Applications";
import { QualityControl } from "@/components/sections/QualityControl";
import { ProductionProcess } from "@/components/sections/ProductionProcess";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <GradesStrip />
        <Applications />
        <QualityControl />
        <ProductionProcess />
        <WhoWeAre />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
