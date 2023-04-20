import React from "react";
import useBillboard from "@/hooks/useBillBoard";
const Billboard = () => {
  const { data } = useBillboard();
  return (
    <div className="h-[56.25vw]">
      <iframe
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
        src={data?.videoUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default Billboard;
