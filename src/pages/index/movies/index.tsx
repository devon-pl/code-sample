import React from "react";
import { useGetMovies } from "../../../hooks/movies";
import MoviesComponent from '../../../components/movies';
import './index.css';

type MoviesProps = {
    movieName: string;
};

const Movies: React.FC<MoviesProps> = ({ movieName }) => {

    const { isLoading, data } = useGetMovies(movieName);

    if (isLoading) {
        return (<div className="movies-isLoading-notification">
            <p>Fetching data</p>
        </div>);
    }

    return (<MoviesComponent data={data} />)
}

export default Movies;