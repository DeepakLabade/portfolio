'use client';
import Image from "next/image";
import {motion} from "motion/react"
import Container from "./components/container";
import StartAnimation from "./components/startAnimation";
import Hero from "./components/hero";
import Projects from "./components/projects";
import About from "./components/about";
import { div } from "motion/react-client";
import Footer from "./components/footer";

const smoothEase = [0.42, 0.21, 0.0, 0.97]


export default function Home() {
  return (
    <div className="h-[253vw] relative">
      <div className="bg-white z-10">
        <Container>
          <Hero />
          <Projects />
          <About />
        </Container>
      </div>
    </div>
  );
}
