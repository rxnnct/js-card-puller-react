import './App.scss';
import WorkspacePageContainer from "./components/WorkspacePage/WorkspacePageContainer";
import MainMenu from "./components/MainMenu/MainMenu";
import {Route, Routes} from 'react-router-dom';
import HelpPage from "./components/HelpPage/HelpPage";
import React from "react";
import logo from "./assets/images/logo.png";

const App = () => {
    return (
        <div className="app">
            <header className="header">
                <img className="appLogo" src={logo} alt="logo"/>
                <span className="appName">JSCardPuller v.2</span>
            </header>

            <div className="appContent">
                <MainMenu/>
                <Routes>
                    <Route path='/*' element={<WorkspacePageContainer/>}/>
                    <Route path='/help/' element={<HelpPage/>}/>
                </Routes>
            </div>

            <footer className="footer">
                <span className="footerText">rxnnct 2022</span>
            </footer>
        </div>
    );
}

export default App;