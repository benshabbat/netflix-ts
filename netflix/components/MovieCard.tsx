import React from "react";
interface MovieCardProps {
  data: Record<string, any>;
}
const MovieCard: React.Fc<MovieCardProps> = ({ data }) => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img src={data.thumbnailUrl} alt={data.title} />
    </div>
  );
};

export default MovieCard;
