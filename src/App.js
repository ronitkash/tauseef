import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route  path="/home">
        <Home imgs="./Ritik.jpeg" age="21" name="Tauseef"/>
      </Route>
      <Route path="/about">
        <About name="Tauseef"/>
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
    </Router>
  );
}

export default App;
