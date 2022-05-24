export interface Movie {
    name: string;
    image?: string
};

export interface ImdbResult {
    score: number,
    show: ImdbMovie
}

interface ImdbImage {
    medium?: string,
    original?: string
};

interface ImdbRating {
    average: number;
};

interface ImdbMovie {
    name: string,
    image?: ImdbImage,
    language: string,
    officialSite: string,
    url: string,
    summary: string,
    rating: ImdbRating
};
