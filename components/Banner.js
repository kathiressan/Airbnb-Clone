import Image from "next/image";
import Fade from "react-reveal/Fade";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/header/headerimg.webp"
        layout="fill"
        objectFit="cover"
        className="w-100"
      />
      <div className="absolute top-20 sm:top-28 xl:top-60 left-5 sm:left-10 xl:p-5 2xl:p-7">
        {/* <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button> */}
        <Fade top>
          <h1 className="text-xl lg:text-5xl lg:pb-4 sm:text-3xl text-white w-72 xl:w-[28rem] 2xl:w-[30rem] font-extrabold">
            Olympian & Paralympian Online Experiences
          </h1>
          <button className="text-black bg-white px-5 py-3 lg:px-10 lg:py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 hover:text-white hover:bg-[#FF5A60]">
            Explore now
          </button>
        </Fade>
      </div>
    </div>
  );
}

export default Banner;
