import React from "react";
import useBillboard from "@/hooks/useBillboard";
import { isEmpty } from "lodash";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButtonBillboard from "./PlayButtonBillboard";
const Billboard = () => {
  const { data } = useBillboard();

  if (isEmpty(data)) {
    return null;
  }
  return (
    <div className="h-[56.25vw]">
      <iframe
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500 "
        src={data?.videoUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="absolute top-[30%] md:top-[30%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-5 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="mt-1 md:mt-2 flex flex-row gap-1">
          <PlayButtonBillboard movieId={data?.id} />
          <button
            className="flex flex-row items-center bg-white bg-opacity-30 rounded-md
           text-white py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold hover:bg-opacity-20 transition gap-1"
          >
            <AiOutlineInfoCircle />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
