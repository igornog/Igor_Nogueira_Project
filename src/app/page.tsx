
import { getMovies } from "@/lib/api";
import MoviesLayout from "./layout";
import Grid from "./components/movies/grid";
import Link from "next/link";

export default async function Movies() {
  const data = await getMovies();

  return (
    <MoviesLayout>
      <div className="mt-8 mb-16 text-center">
        <h1 className="text-2xl text-center">
          {`The Lord of the Rings`}
        </h1>
        <p>{`Data about The Lord of the Rings, the epic books by J. R. R. Tolkien and the official movie adaptions by Peter Jackson.`}</p>
      </div>

      {/* Title */}
      <h2 className="text-2xl text-center ">
        All Movies
      </h2>

      {/* Grid */}
      <Grid data={data} />

      {/* Links to pages */}
      <div className="flex gap-[30px] justify-center">
        <Link href="/characters" className="duration-300 hover:underline">See all characters</Link>
        <Link href="/quotes" className="duration-300 hover:underline">See all quotes</Link>
      </div>
    </MoviesLayout>
  );
}