import React, { useEffect, useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Blog from "./components/blog/blog";
import Home from "./components/home/home";
import Loader from "./components/loader/loader";
import { routes } from "./routes/routes";

function App() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(1)
    }, [count])

    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.home.path} element={count ? <Home /> : <Loader/>}/>
                <Route path={routes.blog.path} element={count ? <Blog /> : <Loader/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;