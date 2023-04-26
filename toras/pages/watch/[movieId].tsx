import React from "react";
import { useRouter } from "next/router";
import useMovie from "@/hooks/useMovie";
import { BiArrowBack } from "react-icons/bi";
const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);
  return (
    <div className="h-screen w-screen">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <BiArrowBack
          onClick={() => router.push("/")}
          className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
        />
      </nav>
      <p className="text-white text-1xl md:text-3xl font-bold">
        <span className="font-light">Watching:</span> {data?.title}
      </p>
      <iframe
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500 "
        src={data?.videoUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Watch;
