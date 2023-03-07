import React, {Suspense, useContext, useState} from 'react';
import "../styles/index.scss"
import {Link, Route, Routes,} from "react-router-dom";
import {AboutPageLazy} from "../pages/AboutPages/AboutPage.lazy";
import {HomePageLazy} from "../pages/HomePage/HomePage.lazy";
import {useTheme} from "../them/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <>
            <div className={`app ${theme}`}>
                <button onClick={toggleTheme}>Theme</button>
                <Link to={'/'} className="links">Main</Link>
                <Link to={'/about'} className="links">About</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/about'} element={<AboutPageLazy/>}/>
                        <Route path={'/'} element={<HomePageLazy/>}/>
                    </Routes>
                </Suspense>
            </div>
        </>
    );
};

export default App;