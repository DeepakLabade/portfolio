'use client';
import Image from "next/image";
import {motion} from "motion/react"
import Container from "./components/container";
import StartAnimation from "./components/startAnimation";
import Hero from "./components/hero";
import Projects from "./components/projects";
import About from "./components/about";

const smoothEase = [0.42, 0.21, 0.0, 0.97]


export default function Home() {
  return (
    <Container>
      <Hero />
      <Projects />
      <About />
    </Container>
  );
}
