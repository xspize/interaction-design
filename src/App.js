import React from "react";
import Week1 from "./components/Week1/Index";
import Week2 from "./components/Week2/Index";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function App(){
    return (
        <Router>
            <div className="App">
            </div>
            <Routes>
                <Route path="/Week-1" element={<Week1 />} />
                <Route path="/Week-2" element={<Week2 />} />
            </Routes>
        </Router>

    );
}



export default App;
