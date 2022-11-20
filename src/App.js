import './App.scss';
import Header from "./components/Header/Header";
import WorkspaceContainer from "./components/Workspace/WorkspaceContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <WorkspaceContainer/>
        </div>
    );
}

export default App;
