import { MovieItem } from './MovieItem';
import Stack from '@mui/material/Stack';

interface MovieListProp {
  movies: Array<MoviesInfo>;
}
interface MoviesInfo {
  id?: number;
  title: string;
  genres: Array<string>;
  duration: number;
  poster: string;
  summary: string;
}

export const MovieList: React.FC<MovieListProp> = ({ movies }) => {
  return (
    <>
      <Stack direction='row' spacing={2}>
        {movies.map((movie) => {
          <MovieItem
            id={movie.id}
            title={movie.title}
            genres={movie.genres}
            duration={movie.duration}
            poster={movie.poster}
            summary={movie.summary}
          />;
        })}
      </Stack>
    </>
  );
};
