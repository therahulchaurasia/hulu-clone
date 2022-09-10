import { ThumbUpIcon, FilmIcon, FilterIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";
// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ result }, ref) => {
  console.log(result);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
        alt={result.name}
        className="rounded-lg"
      />
      <div className="p-2">
        <h2 className="mb-1 text-xl text-white transition-all duration-100 ease-in-out group-hover:font-bold group-hover:text-green-400">
          {result.title || result.original_name}
        </h2>
        <p className="max-w-2xl mb-1 truncate">{result.overview}</p>
        {result.media_type && (
          <p className="absolute top-3 opacity-0 transition-all duration-100 ease-in-out group-hover:opacity-100 flex items-center text-md text-white">
            <FilmIcon className="h-6 mr-1" />
            {result.media_type && `${result.media_type.toUpperCase()}`}{" "}
          </p>
        )}
        <p className="flex items-center opacity-100 text-md">
          {result.release_date || result.first_air_date} •
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});
export default Thumbnail;
