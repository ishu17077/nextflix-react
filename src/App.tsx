import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App(): React.ReactNode {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>);
}