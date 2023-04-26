import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";
interface PlayButtonProps {
    movieId: string;
  }
const PlayButton:React.FC<PlayButtonProps> = ({movieId}) => {
    const router = useRouter()
  return (
    <div onClick={()=>{}} className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
    <BsFillPlayFill className="text-black w-4 lg:w-6" />
  </div>
  )
}

export default PlayButton