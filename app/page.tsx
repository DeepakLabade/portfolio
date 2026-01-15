'use client';
import AboutSection from "./components/about-section";
import Container from "./components/container";
import GithubSection from "./components/github-section";
import Hero from "./components/hero";
import ProjectSection from "./components/project-section";
import SkillsSection from "./components/skills-section";
import WorkTogetherSection from "./components/work-together-section";

//TODO: update a github section 

export default function Home() {
  return (
    <div className="relative">
      <div className="">
        <Container classname={'border-x border-neutral-800border-x h-full border-neutral-800'}>
          <Hero />
          <AboutSection />
          <ProjectSection />
          <GithubSection />
          <SkillsSection />
          <WorkTogetherSection />
        </Container>
      </div>
    </div>
  );
}
