import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import AllNotes from "@/pages/AllNotes";
import PrivateRoute from "./PrivateRoute";
// import NewPage from "@/pages/NewPage";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/all-notes" element={<AllNotes />} />
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/new" element={<NewPage />} /> */}
            <Route path="/notes" element={ <PrivateRoute><AllNotes /></PrivateRoute> } />


        </Routes>
    );
}
