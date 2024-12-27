import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Apartments from "./components/Apartments";
import ApartmentView from "./components/ApartmentView";
import Header from "./components/layout/Header";
import Favorites from "./components/Favorites";

function App() {
    return (
        <Router>
            <Header />
            <main className="app-content">
                <Routes>
                    <Route path="/mieszkania" element={<Apartments />} />
                    <Route path="/mieszkania/:id" element={<ApartmentView />} />
                    <Route path="/ulubione" element={<Favorites />}></Route>
                </Routes>
            </main>
        </Router>
    );
}

export default App;
