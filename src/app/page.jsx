import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-2">
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      </div>
    </main>
  );
};

export default page;