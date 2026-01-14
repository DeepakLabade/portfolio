'use client';
import AboutSection from "./components/about-section";
import Container from "./components/container";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="relative">
      <div className="">
        <Container classname={'border-x border-neutral-800border-x h-screen border-neutral-800'}>
          <Hero />
          <AboutSection />
        </Container>
      </div>
    </div>
  );
}
