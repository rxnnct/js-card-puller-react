import './App.scss';
import Header from "./components/Header/Header";
import Workspace from "./components/Workspace/Workspace";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header store={props.store}/>
            <Workspace store={props.store}/>
        </div>
    );
}

export default App;
