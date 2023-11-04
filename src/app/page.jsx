import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection/>
      </div>
    </main>
  );
};

export default page;