import './App.css';
import {Header} from "./components/mainComponents/Header";
import {Main} from "./components/mainComponents/Main";
import {Footer} from "./components/mainComponents/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
