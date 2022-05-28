import { useState } from 'react';
import { MovieList } from 'components';

interface MoviesInfo {
  id?: number;
  title: string;
  genres: Array<string>;
  duration: number;
  poster: string;
  summary: string;
}
const initialMovies: Array<MoviesInfo> = [
  {
    title: 'Under the Dome',
    genres: ['Drama', 'Science-Fiction', 'Thriller'],
    duration: 60,
    poster:
      'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
    summary:
      'Under the Dome is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome.'
  },
  {
    title: 'Person of Interest',
    genres: ['Action', 'Crime', 'Science-Fiction'],
    duration: 60,
    poster:
      'https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
    summary:
      'You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything.'
  }
];

export const Movies: React.FC = () => {
  const [movies, setMovies] = useState(initialMovies);
  console.log(movies);
  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};
