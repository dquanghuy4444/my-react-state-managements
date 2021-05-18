import './App.css';
import MovieProvider from './MovieContext';
import MovieList from './MovieList';

function App() {
  return (
    <MovieProvider>
      <MovieList></MovieList>
    </MovieProvider>
  );
}

export default App;
