import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Capabilities from "@/components/Capabilities";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Capabilities />
        <Portfolio />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
