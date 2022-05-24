import { useState, useEffect } from "react";
import { ImdbResult, Movie as MovieInterface } from '../../types/movie';

export const useGetMovies = (movieName: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<MovieInterface[]>([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://api.tvmaze.com/search/shows?q=${encodeURI(movieName)}`)
            .then(response => response.json())
            .then((data: ImdbResult[]) => {
                setIsLoading(false);
                const movies = data.map((res) => ({
                    name: res.show.name,
                    image: res.show.image?.original
                }));
                setMovies(movies);
            });
    }, [movieName]);

    return {
        isLoading,
        data: movies
    };
};