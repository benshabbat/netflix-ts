import React, { useCallback, useMemo } from "react";
import axios from "axios";

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorite from "@/hooks/useFavorite";

import { AiOutlinePlus } from "react-icons/ai";
interface FavoriteButtonProps {
  movieId: string;
}
const FavoriteButton: React.Fc<FavoriteButtonProps> = ({ movieId }) => {
  return (
    <div
      onClick={() => {}}
      className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <AiOutlinePlus className="text-white w-4 lg:w-6" />
    </div>
  );
};

export default FavoriteButton;
