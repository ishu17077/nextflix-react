import { createContext, useContext, useEffect, useState } from "react";
import FirebaseMethods from "../requests/firebase_config";
import type { User, UserCredential } from "firebase/auth";



interface AuthContextType {
    user: User | null,
    signUp: (email: string, password: string) => Promise<UserCredential>,
    logIn: (email: string, password: string) => Promise<UserCredential>,
    logOut: (email: string, password: string) => Promise<void>,
}



const AuthContext = createContext<AuthContextType | null>(null)




export function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const fMeth: FirebaseMethods = new FirebaseMethods()

    function signUp(email: string, password: string) {
        return fMeth.signIn({ email: email, password: password })
    }

    function logIn(email: string, password: string) {
        return fMeth.signIn({ email: email, password: password })
    }

    function logOut() {
        return fMeth.signOut()
    }

    useEffect(() => {
        const unsubscribe = fMeth.onAuthStateChange((currentUser: User | null) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])



    return (<AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
        {children}
    </AuthContext.Provider>)
}

export function UserAuth() {

    return useContext(AuthContext)
}