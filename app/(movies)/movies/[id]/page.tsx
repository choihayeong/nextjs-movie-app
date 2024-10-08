import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<p>Loading movie info</p>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<p>Loading movie videos</p>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
