import React from 'react';
import './App.css';
import SpendAnalysis from './containers/SpendAnalysis/SpendAnalysis';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/spendanalysis" exact component={SpendAnalysis} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
