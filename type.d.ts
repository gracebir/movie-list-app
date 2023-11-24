/** @format */

export type resultsType = {
    id: number;
    original_title: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    overview: string;
    release_date: string;
    genre_ids: Array<number>;
};

export type movieResult = {
    key: string;
    title: string;
    poster: string;
    backdrop: string;
    rating: number;
    description: string;
    releaseDate: string;
    genres: any[];
};
