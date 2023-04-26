import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";
interface PlayButtonBillboardProps {
  movieId: string;
}
const PlayButtonBillboard: React.FC<PlayButtonBillboardProps> = ({
  movieId,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {}}
      className="flex flex-row items-center bg-white rounded-md
    py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold hover:bg-opacity-20 transition gap-1"
    >
      <BsFillPlayFill className="text-black w-4 lg:w-6" />
     Play
    </div>
  );
};

export default PlayButtonBillboard;
