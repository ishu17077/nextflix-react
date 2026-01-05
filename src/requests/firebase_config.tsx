import { initializeApp, type FirebaseOptions } from "firebase/app";
import { arrayUnion, doc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, type User as FUser, type UserCredential, } from "firebase/auth";
import User from "../models/User";
import type { MovieJson } from "../models/movie";




export default class FirebaseMethods {
    private static instance: FirebaseMethods | null = null
    constructor() {
        FirebaseMethods.instance = FirebaseMethods.instance ?? this
        return FirebaseMethods.instance
    }

    private readonly _firebaseConfig: FirebaseOptions = {
        apiKey: import.meta.env.VITE_FB_API_KEY,
        authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FB_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FB_APP_ID,
    }

    private readonly _app = initializeApp(this._firebaseConfig)
    private readonly _db = getFirestore(this._app)
    private readonly _auth = getAuth(this._app)


    public async getLikedMovies(): Promise<void> {

    }

    public async signUp({ email, password }: { email: string, password: string }): Promise<UserCredential | null> {
        return await createUserWithEmailAndPassword(this._auth, email, password).then((user: UserCredential) => {
            if (user.user.email) {
                const myUser = new User(user.user.email, [])
                setDoc(doc(this._db, 'users', user.user.uid), myUser.toJson())
                return user
            }
            this.signOut()
            return null;
        })
    }

    public async signIn({ email, password }: { email: string, password: string }): Promise<UserCredential | null> {
        return signInWithEmailAndPassword(this._auth, email, password).then((user: UserCredential) => {
            return user
        })
    }

    public async signOut(): Promise<void> {
        return await signOut(this._auth)
    }

    public getUser(): FUser | null {
        return this._auth.currentUser
    }

    public onAuthStateChange(callback: (user: FUser | null) => Promise<void> | void) {
        return onAuthStateChanged(this._auth, callback)
    }



    public async saveMovie(movie: MovieJson, userId: string): Promise<void> {
        const movieDoc = doc(this._db, 'users', userId)
        return await updateDoc(movieDoc, {
            saved_shows: arrayUnion(movie)
        })
    }

}