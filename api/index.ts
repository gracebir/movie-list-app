/** @format */

import { API_KEY } from "../config";
import { resultsType } from "../type";
const genres = {
    12: "Adventure",
    14: "Fantasy",
    16: "Animation",
    18: "Drama",
    27: "Horror",
    28: "Action",
    35: "Comedy",
    36: "History",
    37: "Western",
    53: "Thriller",
    80: "Crime",
    99: "Documentary",
    878: "Science Fiction",
    9648: "Mystery",
    10402: "Music",
    10749: "Romance",
    10751: "Family",
    10752: "War",
    10770: "TV Movie",
};

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
const getImagePath = (path: string) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path: string) =>
    `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export const getMovies = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    const results: Array<resultsType> = data.results;
    const movies = results?.map(
        ({
            id,
            original_title,
            poster_path,
            backdrop_path,
            vote_average,
            overview,
            release_date,
            genre_ids,
        }) => {
            return {
                key: String(id),
                title: original_title,
                poster: getImagePath(poster_path),
                backdrop: getBackdropPath(backdrop_path),
                rating: vote_average,
                description: overview,
                releaseDate: release_date,
                //@ts-ignore
                genres: genre_ids.map((genre) => genres[genre]),
            };
        }
    );

    return movies;
};
