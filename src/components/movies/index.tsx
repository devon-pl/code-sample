import React from "react";
import { Movie as MovieInterface } from '../../types/movie';
import Movie from '../../components/movie';
import './movies.css';

type MovieProps = {
    data: MovieInterface[]
};

const Movies: React.FC<MovieProps> = ({ data: movies }) => {
    if (!movies.length) {
        return null;
    }

    return (
        <div>
            <div>
                <p>Movie list</p>
            </div>
            <div className="movies">
                {movies.map((movie) => (
                    <Movie data={movie} />
                ))}
            </div>
        </div >
    );
}

export default Movies;