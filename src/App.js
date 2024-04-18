import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import LayoutPage from "./components/layoutPage";
import Courses from "./pages/courses";
import Team from "./pages/team";

function App(props) {
    return (
        <div className={"container-fluid"}>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/cabinet" element={<LayoutPage/>}>
                    <Route path={"/cabinet/courses"} element={<Courses/>} />
                    <Route path={"/cabinet/team"} element={<Team/>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;