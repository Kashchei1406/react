import React, {Suspense} from 'react';
import "./styles/index.scss"
import {Link, Route, Routes,} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProviders";
import {classNames} from "shared/lib/classNames/className";
import {AboutPage} from "pages/AboutPage";
import {HomePage} from "pages/HomePage";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <>
            <div className={classNames('app',{},[theme])}>
                <button onClick={toggleTheme}>Theme</button>
                <Link to={'/'} className="links">Main</Link>
                <Link to={'/about'} className="links">About</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/about'} element={<AboutPage/>}/>
                        <Route path={'/'} element={<HomePage/>}/>
                    </Routes>
                </Suspense>
            </div>
        </>
    );
};

export default App;