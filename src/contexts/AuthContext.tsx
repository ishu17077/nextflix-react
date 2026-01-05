import { createContext, useContext, useEffect, useState } from "react";
import FirebaseMethods from "../requests/firebase_config";
import type { User, UserCredential } from "firebase/auth";
import { useNavigate } from "react-router-dom";



export interface AuthContextType {
    user: User | null,
    signUp: (email: string, password: string) => Promise<UserCredential | null>,
    logIn: (email: string, password: string) => Promise<UserCredential | null>,
    logOut: () => Promise<void>,
}



const AuthContext = createContext<AuthContextType>(AuthContextProvider.prototype)




export function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate()
    const fMeth: FirebaseMethods = new FirebaseMethods()
    const [user, setUser] = useState<User | null>(fMeth.getUser())

    function signUp(email: string, password: string) {
        return fMeth.signUp({ email: email, password: password })
    }

    function logIn(email: string, password: string) {
        return fMeth.signIn({ email: email, password: password })
    }

    function logOut() {
        return fMeth.signOut()
    }

    useEffect(() => {
        if (user) {
            navigate("/")
        }
        const unsubscribe = fMeth.onAuthStateChange((currentUser: User | null) => {
            setUser(currentUser)
            if (!currentUser) {
                navigate("/signup")
            }else{
                navigate("/")
            }
        })

        return () => {
            unsubscribe()
        }
    }, [])



    return (<AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
        {children}
    </AuthContext.Provider>)
}

export function UserAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("UserAuth mustBe usedWithin an AuthContextProvider");
    }
    return context
}