import styles from "../styles/movie-info.module.css";
import { API_URL } from "../app/(home)/page";

export async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);

  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <figure className={styles.poster}>
        <img src={movie.poster_path} alt={movie.title} />
      </figure>

      <div className={styles.info}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p>⭐ {movie.vote_average.toFixed()}</p>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={`_blank`}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
