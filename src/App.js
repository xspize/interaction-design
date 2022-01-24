import React from "react";
import Week1 from "./components/Week1/Index";
import Week2 from "./components/Week2/Index";
import Week3 from "./components/Week3/Index";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Home = () => (
    <nav>
    <h1>Welcome to Interaction Design!</h1>
  <ul>
    <li>
      <Link to="/Week-1">Week 1 |</Link>
      <br></br>
      <Link to="/Week-2">Week 2 |</Link>
      <br></br>
      <Link to="/Week-3">Week 3 |</Link>
    </li>
  </ul>
</nav>

);


function App(){
    return (
        <Router>
            <Switch>
                <Route path="/Week-1">
                    <Week1 />
                </Route>
                <Route path="/Week-2">
                    <Week2 />
                </Route>
                <Route path="/Week-3">
                    <Week3 />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>

    );
}



export default App;
