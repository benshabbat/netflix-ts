import React from "react";
import useMoviesList from "@/hooks/useMoviesList";
import MovieList from "./MovieList";

const MoviesList = () => {
  const { data: movies = [] } = useMoviesList();

  return (
    <div className="pb-40">
      <MovieList data={movies} title={"Tora"} />
    </div>
  );
};

export default MoviesList;
