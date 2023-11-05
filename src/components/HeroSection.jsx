"use client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-[60vh]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className=" text-white mb-4 text-3xl sm:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-pink-500">
              Hello, I am{" "}
            </span>
            Alex
            {/* <TypeAnimation
              sequence={[
                "Sazzad",
                1000,
                "Web Developer",
                1000,
                "React Developer",
                1000,
              ]}
              speed={40}
              repeat={Infinity}
              deletionSpeed={90}
            /> */}
          </h1>
          <p className=" text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            veniam quo quos tempore, nobis blanditiis consequatur
          </p>
          <div>
            <button className=" px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
              Hire me
            </button>
            <button className=" px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
          <div className="rounded-full bg-[#181818] w-[270px] h-[270px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className=" absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
