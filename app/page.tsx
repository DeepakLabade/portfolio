'use client';
import Container from "./components/container";
import Hero from "./components/hero";

const smoothEase = [0.42, 0.21, 0.0, 0.97]


export default function Home() {
  return (
    <div className="relative">
      <div className="">
        <Container classname={'border-x border-neutral-800border-x border-neutral-800'}>
          <Hero />
        </Container>
      </div>
    </div>
  );
}
