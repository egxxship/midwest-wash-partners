import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
