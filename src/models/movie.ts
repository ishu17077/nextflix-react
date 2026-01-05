export interface MovieJson {
    id: string,
    adult: boolean,
    backdrop_path: string,
    genre_ids: string[],
    title: string,
    poster_path: string,
    release_date: string,
    overview: string,
}

export type MovieJsonWithoutId = Omit<MovieJson, 'id'>

export default class MovieItem {
    private _id: string | null = null
    public get id(): string | null { return this._id }


    constructor(
        private readonly adult: boolean,
        private readonly backdrop_path: string,
        private readonly genre_ids: string[],
        private readonly title: string,
        private readonly poster_path: string,
        private readonly release_date: string,
        private readonly overview: string,
    ) {

    }


    public static fromJSON(json: MovieJson): MovieItem {
        const movieItem = new MovieItem(
            json.adult,
            json.backdrop_path,
            json.genre_ids,
            json.title,
            json.poster_path,
            json.release_date,
            json.overview,
        )
        movieItem._id = json.id
        return movieItem
    }

    public toJSON(): MovieJsonWithoutId {
        return {
            adult: this.adult,
            backdrop_path: this.backdrop_path,
            genre_ids: this.genre_ids,
            overview: this.overview,
            poster_path: this.poster_path,
            release_date: this.release_date,
            title: this.title,
        }
    }
}