import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

export default function App(): React.ReactNode {
    return (
        <>
            <AuthContextProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AuthContextProvider>
        </>);
}