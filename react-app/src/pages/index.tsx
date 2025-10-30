import { Routes, Route } from "react-router-dom";
import HomePage from "./home";
import LayoutPage from "../layout";
const Pages = () => {
    return (
        <Routes>
            <Route path="*" element={<LayoutPage Children={<HomePage />} />} />
        </Routes>
    );
};
export default Pages;
