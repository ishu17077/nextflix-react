import type { AxiosRequestConfig } from "axios";

export const TheMovieDBOptions: AxiosRequestConfig = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DB_AUTH_TOKEN}`
    }
};

export const TheMovieDBRequests = {
    requestPopular: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    requestTopRated: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    requestTrending: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    requestHorror: "https://api.themoviedb.org/3/search/movie?query=horror&include_adult=false&language=en-US&page=1",
    requestUpcoming: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
}