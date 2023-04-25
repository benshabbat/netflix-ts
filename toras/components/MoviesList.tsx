import React from "react";
import useMoviesList from "@/hooks/useMoviesList";
import MovieList from "./MovieList";
import useFavorite from "@/hooks/useFavorite";

const MoviesList = () => {
  const { data: movies = [] } = useMoviesList();
  const { data: favorites = [] } = useFavorite();

  return (
    <>
      <div className="pb-40">
        <MovieList data={movies} title={"Tora"} />
      </div>
      <div className="pb-40">
        <MovieList data={favorites} title={"My List"} />
      </div>
    </>
  );
};

export default MoviesList;
