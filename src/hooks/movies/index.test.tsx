
import { renderHook } from '@testing-library/react-hooks';
import { useGetMovies } from '../../hooks/movies';
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

const response = [{
    show: {
        "id": 2746,
        "url": "https://www.tvmaze.com/shows/2746/star",
        "name": "Star",
        "language": "English",
        "genres": ["Drama", "Music"],
        "officialSite": "http://www.fox.com/star",
        "schedule": { "time": "21:00", "days": ["Wednesday"] },
        "rating": { "average": 7.1 },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/88/222182.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/88/222182.jpg"
        },
        "summary": "<p>Featuring a soundtrack of original music and stunning music performances, <b>Star</b> follows three talented singers, desperate for a new start and with ambitions of stardom, as they navigate the cut-throat music business on their road to success. Meet Star, a tough-as-nails young woman, who came up in the foster care system and decides one day to take control of her destiny. Star tracks down her sister, Simone, and her Instagram bestie, Alexandra, and together, the trio journeys to Atlanta to become music superstars. Reality soon dawns on the girls' fantasies, and they start to learn that ambition often comes at a cost. And sometimes that cost is too high.</p>",
        "updated": 1578906325,
    }
}]

describe('Movies - hook', () => {
    it('tests if data fetched', async () => {
        fetchMock.mockResponse(JSON.stringify(response));
        const { result, waitForNextUpdate } = renderHook(() => useGetMovies('Star Trek'));

        expect(result.current.data).toStrictEqual([]);
        expect(result.current.isLoading).toBe(true);
        await waitForNextUpdate();
        expect(result.current.data).toStrictEqual([
            {
                image: 'https://static.tvmaze.com/uploads/images/original_untouched/88/222182.jpg',
                name: 'Star',
            }
        ]);
        expect(result.current.isLoading).toBe(false);
        expect(fetchMock).toHaveBeenCalledWith("http://api.tvmaze.com/search/shows?q=Star%20Trek");
    });

    it('tests if updated movie name will refetch the data', async () => {
        fetchMock.mockResponse(JSON.stringify(response));
        const { waitForNextUpdate, rerender } = renderHook(({ initialValue }) => useGetMovies(initialValue), {
            initialProps: { initialValue: 'Star Trek' }
        });
        await waitForNextUpdate();

        expect(fetchMock).toHaveBeenCalledWith("http://api.tvmaze.com/search/shows?q=Star%20Trek")
        rerender({ initialValue: 'Test' });
        await waitForNextUpdate();
        expect(fetchMock).toHaveBeenCalledWith("http://api.tvmaze.com/search/shows?q=Test");
    });
})