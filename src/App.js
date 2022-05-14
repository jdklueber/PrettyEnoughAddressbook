import {useState} from "react";
import {mock_data} from "./data/mock_data";
import Header from "./components/ui/Header";
import {Routes, Route} from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import AddPage from "./pages/AddPage";



function App() {
    const [data, setData] = useState(mock_data);


    return (
        <div className={"max-w-3xl mx-auto"}>
            <Header/>
            <Routes>
                <Route path="/" element={<SearchPage data={data}/>}/>
                <Route path="/add" element={<AddPage setData={setData}/>}/>
            </Routes>

        </div>
    );
}

export default App;
