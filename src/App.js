import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiWalletAlt } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { GiPiggyBank } from "react-icons/gi";
import { CgMail } from "react-icons/cg";
import logout from './images/logout.png';
import bell from './images/bell.png';
import contact from './images/contact.jpeg';
import WalletPage from './containers/WalletPage/Walletpage.js';
 
function App() {
  return (
    <div>
      <div className="Header">
        <div className="header-left">
          <span id="main-head">optima</span>
          <span id="sub">Pay Less,Save More</span>
          <span id="bell">
            <img src={bell} alt="" width="8px" height="28px"  />
          </span>
        </div>
        <div className="header-right">
        
          <img src={contact} alt="" height="40px" width="20px" />
          <select name="users" id="users">
            <option value="Alice">Alice</option>  
          </select>
         
        <div className="btn" onClick="">
        <img src={logout} alt="" height="20px" width="20px"/> 
        </div>
 
        </div>
      </div>
      <div>
        <div className="menu">
          <a href="/" >
            <AiOutlineHome />
          </a>
          <a href="/wallet" className="active">
            <BiWalletAlt />
          </a>
          <a href="/">
            <RiMoneyDollarCircleLine />
          </a>
          <a href="/">
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
          <Router>
            <Route path="/wallet"  component={WalletPage} />
          </Router>
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
        </div>
      </div>
    </div>
  );
}
 
export default App;
