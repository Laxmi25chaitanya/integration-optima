import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import DebitHover from "./DebitHover";
import CreditHover from "./CreditHover";
import { GoArrowRight } from "react-icons/go";
import { GoGraph } from "react-icons/go";
import { BsFillInfoCircleFill } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./homepage.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import api from '../../config/api'
class Financials extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      userdata: [],
      debit: [],
      credit: []
    };
    this.getUserData = this.getUserData.bind(this);
    this.getDebitData = this.getDebitData.bind(this);
    this.getCreditData = this.getCreditData.bind(this);
  }

  async componentDidMount() {
    var getUserDetails = await this.getUserData();
    var getDebitVal = await this.getDebitData();
    var getCreditVal = await this.getCreditData();
    this.setState({ userdata: getUserDetails, debit: getDebitVal, credit: getCreditVal });
  }

  async getUserData() {
    const response = await fetch(api.userdata);
    const json = await response.json();
    return json;
  }

  async getDebitData() {
       const response = await fetch(api.debit, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const json = await response.json();
     return json;
  }
  async getCreditData() {
    const response = await fetch(api.credit, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const json = await response.json();
    return json;
  }

  render() {
    if (this.state.userdata[0]) {
      // const loggedUser=localStorage.getItem("userName");
      const userdata = this.state.userdata[0].userData[0];
      return (
        <div>
          <div className="main">
            <div className="main-left">
              <div>
                <h2>&nbsp;&nbsp;&nbsp;My Financials</h2>
              </div>
              <div className="main-left-top">
                <div className="mltone">
                  <span>Debit accounts</span>
                  <br />
                  <span className="tdi-digits">{userdata.noOfDebitAccounts}</span>
                  <br />
                  <span>Credit accounts</span>
                  <br />
                  <span className="tdi-digits">{userdata.noOfCreditAccounts} </span>
                  <br />
                </div>
                <div className="vertical"></div>
                <div className="mlttwo">
                  <span>Debit balance</span>
                  <br />
                  <span className="tdi-digits">
                    &#8356; {userdata.totalAvailableDebitBalance}
                  </span>
                  <br />
                  <span>Credit Outstanding</span>
                  <br />
                  <span className="tdi-digits">
                    &#8356; {userdata.totalAvailableCreditBalance}
                  </span>
                  <br />
                </div>
                <div className="vertical"></div>

                <div className="mltthree">
                  <p id="mltthree-text">
                    Looking for best option to maximize your savings and optimise
                    your expenses
                </p>
                  <span className="btn btn-success btn-xs">
                    &nbsp;&nbsp;Yes&nbsp;
                  <GoArrowRight className="yesarrow" />
                  &nbsp;
                </span>
                </div>
              </div>
              <div className="main-left-bottom">
                <div className="main-left-bottom-left">
                  <div className="inner-head">
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginLeft: 0,
                      }}
                    >
                      <span>Debit Accounts</span>
                    </div>
                    <div>
                      <span className="btn">
                        <GoGraph />
                      </span>
                    </div>
                  </div>

                  {

                    this.state.debit[0].banks.map((bank, index) => {
                      return (<div
                        className="inner"
                        data-tip="tooltip"
                        data-for={"debit_" + bank.bankId}
                        data-effect="solid"
                        data-background-color="white"
                      >
                        <div className="inner-one">
                          <div className="cardimage">

                            <img className="homeimg" src={`./homeassets/debit${index}.png`} alt={bank.bankName}
                              height="50px"></img>
                          </div>
                          <div>
                            {bank.bankName}
                            <br />
                            <span className="intRate">
                              {bank.accounts[0].interestRate}

                      &#37;&nbsp;AER
                    </span>
                          </div>
                        </div>
                        <div className="inner-two">
                          {bank.accounts[0].accountType}
                  &nbsp;|&nbsp;&#8356;{bank.accounts[0].balance}
                        </div>
                        <ReactTooltip id={"debit_" + bank.bankId}>
                          <DebitHover id={bank.bankId} bankdetails={bank} index={index} />
                        </ReactTooltip>
                      </div>
                      )
                    }
                    )
                  }
                  <div className="inner just-for-flex-purpose"></div>
                </div>

                <div className="main-left-bottom-right">
                  <div className="inner-head">
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginLeft: 0,
                      }}
                    >
                      <span>Credit Accounts</span>
                    </div>
                    <div>
                      <span className="btn">
                        <GoGraph />
                      </span>
                    </div>
                  </div>

                  {
                    this.state.credit[0].banks.map((bank, index) => {
                      return (
                        <div className="inner" data-tip="tooltip"
                          data-for={"credit_" + bank.bankId}
                          data-effect="solid"
                          data-background-color="white">
                          <div className="inner-one">
                            <div className="cardimage">
                              <img className="homeimg" src={`./homeassets/credit${index}.png`} alt={bank.bankName}
                                height="50px"></img>
                            </div>
                            <div>
                              {bank.bankName}
                              <br />
                              <span className="intRate">
                                {bank.accounts[0].apr || bank.accounts[0].interestRate}
                        &#37;&nbsp;APR
                      </span>
                              <br />
                              <span style={{ color: "rgb(255,93,100)" }}>
                                <BsFillInfoCircleFill />
                              </span>
                              <span>
                                {Math.ceil((eval(bank.accounts[0].dueDate) -
                                  new Date().setDate(new Date().getDate())) /
                                  86400000)}
                        Days
                      </span>
                            </div>
                          </div>
                          <div className="inner-two">
                            {bank.accounts[0].accountType}
                    &nbsp;|&nbsp;&#8356;
                    {bank.accounts[0].totalBalanceDue}
                          </div>

                          <ReactTooltip id={"credit_" + bank.bankId}>
                            <CreditHover id={bank.bankId} bankdetails={bank} index={index} />
                          </ReactTooltip>
                        </div>
                      )
                    }
                    )
                  }
                  <div className="inner-opt-button">
                    <div>
                      <button className="btn btn-success btn-lg">
                        Optimize&nbsp;
                      <GoArrowRight className="optimizearrow" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-right">
              <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} useKeyboardArrows={true} showStatus={false}>
                <div>
                  <img src="./homeassets/item1.png" alt="" className="crsl-image" />
                </div>
                <div>
                  <img src="./homeassets/item2.jfif" alt="" className="crsl-image" />
                </div>
              </Carousel>
            </div>
          </div>

        </div>
      );
    } else {
      return (<h1>
        <span className=" text-muted" style={{
          fontSize: "80px",
          color: "black",
          display: "flex",
          justifyContent: "center",
        }}>Loading..</span>
      </h1>)
    }

  }
}
export default Financials;
