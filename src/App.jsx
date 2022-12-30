import './App.scss';
import Header from "./components/Header/Header";
import WorkspacePageContainer from "./components/WorkspacePage/WorkspacePageContainer";
import MainMenu from "./components/MainMenu/MainMenu";
import {Route, Routes} from 'react-router-dom';
import HelpPage from "./components/HelpPage/HelpPage";
import React from "react";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
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