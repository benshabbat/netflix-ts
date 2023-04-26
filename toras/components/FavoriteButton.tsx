import React, { useCallback, useMemo } from "react";
import axios from "axios";

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorite from "@/hooks/useFavorite";

import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
interface FavoriteButtonProps {
  movieId: string;
}
const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {

  const { mutate: mutateFav } = useFavorite();
  const { data: user, mutate: mutateUser } = useCurrentUser();

  const isFav = useMemo(() => {
    const list = user?.favoriteIds || [];
    return list.includes(movieId);
  }, [user, movieId]);

  const toggleFav = useCallback(async () => {
    let response;
    try {
      if (isFav) {
        response = await axios.delete("/api/favorite", { data: { movieId } });
      } else {
        response = await axios.post("/api/favorite", { movieId });
      }
      const updatedFav = response?.data?.favoriteIds;

      mutateUser({ ...user, favoriteIds: updatedFav });
      mutateFav();
    } catch (error) {
      console.log(error);
    }
  }, [user, mutateFav, mutateUser, movieId, isFav]);

  const Icon = isFav ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFav}
      className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white w-4 lg:w-6" />
    </div>
  );
};

export default FavoriteButton;
