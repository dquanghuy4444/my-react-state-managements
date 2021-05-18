import { useContext } from 'react';
import './App.css';
import { MovieContext } from './MovieContext';

function MovieList() {
  const [value , setValue] = useContext(MovieContext);
  return (
    <div>
      { value.map(movie => <div>{ movie.name }</div>) }
    </div>
  );
}

export default MovieList;
