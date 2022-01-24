import React from "react";
import Week1 from "./components/Week1/Index";
import Week2 from "./components/Week2/Index";
import Week3 from "./components/Week3/Index";
import Week4 from "./components/Week4/Index";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Home = () => (
    <center>
    <nav>
    <h1>Welcome to Interaction Design!</h1>
  <ul>
      <Link to="/Week-1">Week 1 | Loading Screen</Link>
      <br></br>
      <Link to="/Week-2">Week 2 | Notification</Link>
      <br></br>
      <Link to="/Week-3">Week 3 | Buttons </Link>
      <br></br>
      <Link to="/Week-4">Week 4 | Login Screen </Link>
  </ul>
</nav>
</center>
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
                <Route path="/Week-4">
                    <Week4 />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>

    );
}



export default App;
