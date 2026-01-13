'use client';
import Container from "./components/container";

const smoothEase = [0.42, 0.21, 0.0, 0.97]


export default function Home() {
  return (
    <div className="relative">
      <div className="bg-white z-10">
        <Container>
          <div className="bg-red-200">
          hii there
          </div>
        </Container>
      </div>
    </div>
  );
}
