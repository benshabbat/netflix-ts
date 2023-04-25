import React, { useCallback, useMemo } from "react";
import axios from "axios";

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorite from "@/hooks/useFavorite";

import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
interface FavoriteButtonProps {
  movieId: string;
}
const FavoriteButton: React.Fc<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFav } = useFavorite();
  const { mutate: mutateUser, data: user } = useCurrentUser();

  const isFav = useMemo(() => {
    const list = user?.favoriteIds || [];
    return list.includes(movieId);
  }, [user, movieId]);

  const toggleFav = useCallback(async () => {
    let res;
    if (isFav) {
      res = await axios.delete("/api/favorite", { data: { movieId } });
    } else {
      res = await axios.post("/api/favorite", { movieId });
    }
    const updatedFav = res?.data?.favoriteIds;

    mutateUser({ ...user, favoriteIds: updatedFav });
    mutateFav();
  }, [mutateFav, mutateUser, movieId, user, isFav]);

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
