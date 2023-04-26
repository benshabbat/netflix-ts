import React from "react";
import { useRouter } from "next/router";
import useMovie from "@/hooks/useMovie";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);
  return (
    <div className="h-screen w-screen">
      <iframe
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500 "
        src={data?.videoUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Watch;
