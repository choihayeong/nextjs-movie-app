import styles from "./home.module.css";
import Movie from "../../components/movie";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();

  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      <ul className={styles.movies}>
        {movies.map((item) => (
          <Movie
            key={item.id}
            id={item.id}
            poster_path={item.poster_path}
            title={item.title}
          />
        ))}
      </ul>
    </div>
  );
}
