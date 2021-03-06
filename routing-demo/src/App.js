import React from "react";
import "./App.css";
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";
import ItemDetails from "./ItemDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetails}/>
        </Switch>
      </div>
    </Router>
  );
}
//router checks for / most generic and some thing again that starts with / spefic about
//and then stops
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
