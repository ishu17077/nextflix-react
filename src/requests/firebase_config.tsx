import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, type User, type UserCredential } from "firebase/auth";



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

    public async signUp({ email, password }: { email: string, password: string }): Promise<UserCredential> {
        return await createUserWithEmailAndPassword(this._auth, email, password)
    }

    public async signIn({ email, password }: { email: string, password: string }): Promise<UserCredential> {
        return signInWithEmailAndPassword(this._auth, email, password)
    }

    public async signOut(): Promise<void> {
        return await signOut(this._auth)
    }

    public onAuthStateChange(callback: (user: User | null) => Promise<void> | void) {
        return onAuthStateChanged(this._auth, callback)
    }

}