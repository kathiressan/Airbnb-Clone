import Image from "next/image";
import Fade from "react-reveal/Fade";

function SearchBanner() {
  return (
    <div className="relative h-[300px]">
      <Image
        src="/header/searchimg.jpg"
        layout="fill"
        objectFit="cover"
        className="w-100"
      />
    </div>
  );
}

export default SearchBanner;
