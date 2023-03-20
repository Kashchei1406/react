import "./styles/index.scss"
import {useTheme} from "app/providers/ThemeProviders";
import {classNames} from "shared/lib/classNames/className";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <>
            <div className={classNames('app',{},[theme])}>
                <Navbar/>
                <AppRouter/>
                <button onClick={toggleTheme}>Theme</button>
            </div>
        </>
    );
};

export default App;