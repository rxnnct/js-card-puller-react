import './App.scss';
import WorkspacePageContainer from "./components/WorkspacePage/WorkspacePageContainer";
import MainMenu from "./components/MainMenu/MainMenu";
import {Route, Routes} from 'react-router-dom';
import HelpPage from "./components/HelpPage/HelpPage";
import React from "react";
import logo from "./assets/images/logo.png";

const App = () => {
    return (
        <div className="app-wrapper">
            <header>
                <img className="logo" src={logo} alt="logo"/>
                <span className="appName">JSCardPuller v.2</span>
            </header>

            <div className="content">
                <MainMenu/>
                <Routes>
                    <Route path='/*' element={<WorkspacePageContainer/>}/>
                    <Route path='/help/' element={<HelpPage/>}/>
                </Routes>
            </div>

            <footer>
                <span className="footer-text">rxnnct 2022</span>
            </footer>
        </div>
    );
}

export default App;