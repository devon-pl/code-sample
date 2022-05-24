import React from "react";
import { Movie as MovieInterface } from '../../types/movie';

type MovieProps = {
    data: MovieInterface
}

const Movie: React.FC<MovieProps> = ({ data }) => {
    if (!data.image) {
        return null;
    }

    return (
        <div key={data.name}>
            <div>
                <img src={data.image} alt={data.name} style={{ width: "100%" }} />
            </div>
            <div>
                <p>{data.name}</p>
            </div>
        </div>
    );
}

export default Movie;