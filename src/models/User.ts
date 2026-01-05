export interface UserJson {
    id: string | null,
    email: string,
    saved_shows: string[],
}

export type UserJsonWithoutId = Omit<UserJson, 'id'>

export default class User {
    private _id: string | null = null
    public get id(): string | null {
        return this._id
    }

    constructor(private readonly email: string, private readonly saved_shows: string[]) { }

    public toJson(): UserJsonWithoutId {
        return {
            email: this.email,
            saved_shows: this.saved_shows,
        }
    }

    public static fromJson(json: UserJson): User {
        const user = new User(
            json.email,
            json.saved_shows,
        )
        user._id = json.id
        return user
    }

}