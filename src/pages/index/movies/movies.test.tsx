import Movies from './index';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useGetMovies } from '../../../hooks/movies';

jest.mock('../../../hooks/movies', () => ({
    useGetMovies: jest.fn()
}));

describe("Movies container", () => {
    it('renders "fetching data" message when fetching data', () => {
        (useGetMovies as jest.Mock).mockReturnValueOnce({ isLoading: true, data: [] })
        render(<Movies movieName="Star Trek" />);
        const fetchingDataElement = screen.getByText(/Fetching data/i);
        expect(fetchingDataElement).toBeInTheDocument();
    });

    it('does not render "fetching data" message when not fetching data', () => {
        (useGetMovies as jest.Mock).mockReturnValueOnce({ isLoading: false, data: [] })
        render(<Movies movieName="Star Trek" />);
        const fetchingDataElement = screen.queryByText("Fetching data");
        expect(fetchingDataElement).toBe(null);
    });
});
