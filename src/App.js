import React from 'react';
import Menu from './Menu';
import Homepage from "./Homepage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NewCars from "./NewCars";
import UseCars from "./UseCars";
import Service from "./Service";
import Com from "./Com";
import Footer from "./Footer";
import Ix from "./Ix";
import Threesome from "./Threesome";

function App() {
  return (
      <>
      <Router>
          <Menu />
          <div className="content">
              <Switch>
                  <Route exact path="/"><Homepage/></Route>
                  <Route exact path="/newcars"><NewCars/></Route>
                  <Route exact path="/usecars"><UseCars/></Route>
                  <Route exact path="/com"><Com/></Route>
                  <Route exact path="/service"><Service/></Route>
                  <Route exact path="/ix"><Ix/></Route>
                  <Route exact path="/threesome"><Threesome/></Route>
              </Switch>
          </div>
      </Router>
          <Footer />
      </>
  );
}
export default App;
