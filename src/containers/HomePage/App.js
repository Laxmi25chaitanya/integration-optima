import "./App.css";
import "./homepage.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Financials from "./Financials";
import Loginpage from "../LoginPage/Loginpage";
import Menu from "../../components/Menu/Menu"
import Header from "../../components/Header/Header"
function App() {

  return (
    <div>
      <Header/>

      <Menu/>
      <div>
        <div>
          <Financials />
          <Router>
            <Route exact path="/" component={Loginpage} />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
