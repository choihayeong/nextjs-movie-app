import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
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
