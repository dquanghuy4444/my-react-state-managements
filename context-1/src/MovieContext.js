import React , { createContext , useState } from 'react';

export const MovieContext = createContext()

function MovieProvider({ children }) {
    const [movies , setMovies] = useState([
        {
            name:"Harry Potter",
            price:'$10',
            id:23124,
        },
        {
            name:"Harry Potter",
            price:'$12',
            id:23125,
        },
    ])
    return (
        <MovieContext.Provider value={ [movies , setMovies] }>
            { children }
        </MovieContext.Provider>
    );
}

export default MovieProvider;
