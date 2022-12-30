import './App.scss';
import Header from "./components/Header/Header";
import WorkspacePageContainer from "./components/WorkspacePage/WorkspacePageContainer";
import MainMenu from "./components/MainMenu/MainMenu";
import {Route, Routes} from 'react-router-dom';
import HelpPage from "./components/HelpPage/HelpPage";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <MainMenu/>
            <Routes>
                <Route path='/*' element={<WorkspacePageContainer/>}/>
                <Route path='/help/' element={<HelpPage/>}/>
            </Routes>
        </div>
    );
}

export default App;