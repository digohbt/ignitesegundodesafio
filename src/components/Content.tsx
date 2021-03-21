import { MovieCard } from '../components/MovieCard';
import '../styles/content.scss';

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content({...props}) {
  return (
    <div className="container">
       {console.log(props)}
        <header>
          <span className="category">Categoria:<span> {props.filmesBox.selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {props.filmesBox.movies.map((movie : MovieProps) => (
              <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}