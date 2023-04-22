import React from "react";
import { isEmpty } from "lodash";
import useMoviesList from "@/hooks/useMoviesList";

// interface MoviesListProps {
//   data: Record<string, any>[];
//   title: string;
// }
const MoviesList = () => {
  const { data:movies=[] } = useMoviesList()
  if (isEmpty(movies)) {
    return null;
  }
  return (
    <div className="pb-40">
      <div className="px-4 md:px-12 mt-4 space-y-8">
        <div>
          <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
            {"Tora"}
          </p>
          <div className="grid grid-col-4 gap-2">
            {movies.map((movie) => {
              <div key={movie.id}>{movie}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
