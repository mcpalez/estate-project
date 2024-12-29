import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Apartments from "./pages/Apartments";
import ApartmentView from "./pages/ApartmentView";
import Header from "./components/layout/Header";
import Favorites from "./pages/Favorites";

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
