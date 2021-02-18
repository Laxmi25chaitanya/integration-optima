import "./App.css";
import "./homepage.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiWalletAlt } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { GiPiggyBank } from "react-icons/gi";
import { CgMail } from "react-icons/cg";
import Financials from "./Financials";
import Loginpage from "../LoginPage/Loginpage";
import WalletPage from "../WalletPage/Walletpage";
import SpendAnalysis from "../SpendAnalysis/SpendAnalysis"
// import layout from "../HomePage/CreditHover";

function App() {
  return (
    <div>
      <div className="Header">
        <div className="header-left">
          <span id="main-head">optima</span>
          <span id="sub">Pay Less,Save More</span>
          <span id="bell">
            <img
              className="layoutimg"
              src="./layoutassets/bell.png"
              alt=""
              height="30px"
            />
          </span>
        </div>
        <div className="header-right">
          <img
            className="layoutimg"
            src="./layoutassets/contact.jpeg"
            alt=""
            height="30px"
          />
          <select name="users" id="users">
            <option value="alice">Alice</option>
            <option value="bob">Bob</option>
          </select>

          <a href="/">
            <img
              className="layoutimg"
              src="./layoutassets/logout.png"
              alt="Logout"
              height="29px"
            />
          </a>
        </div>
      </div>
      <div>
        <div className="menu">
          <a href="/home" className="active">
            <AiOutlineHome />
          </a>
          <a href="/WalletPage">
            <BiWalletAlt />
          </a>
          <a href="/">
            <RiMoneyDollarCircleLine />
          </a>
          <a href="/SpendAnalysis">
            <GoGraph />
          </a>
          <a href="/">
            <GiPiggyBank />
          </a>
          <a href="/">
            <CgMail />
          </a>
        </div>
      </div>
      <div>
        <div>
          <Financials />
          {/* <Router>
            <Route path="/home"  component={Financials} />
          </Router> */}
          {/*For Remaining Nav Buttons
           <Router>
            <Route path="/"  component={} />
          </Router>
          <Router>
            <Route path="/"  component={} />
          </Router>
          <Router>
            <Route path="/"  component={} />
          </Router> */}
          <Router>
            <Route exact path="/" component={Loginpage} />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
