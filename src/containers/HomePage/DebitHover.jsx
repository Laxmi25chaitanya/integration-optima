import React, { Component } from "react";

class DebitHover extends Component {

  render() {
    if (this.props.bankdetails) {
      const bank = this.props.bankdetails;
      const index=this.props.index;

      return (

        <div className="hover-card-main">
          <div>
            <img className="homeimg" src={`./homeassets/debit${index}.png`} alt={bank.bankName} height="110px" />
          </div>
          <div className="hover-text-left">
            <div>
              <div className="head">Banks</div>
              <div>{bank.bankName}</div>
            </div>
            <div>
              <div className="head">Standing Instructions</div>
              <div> &#8356;{bank.accounts[0].standingInst}</div>
            </div>
            <div>
              <div className="head">Min Balance</div>
              <div> &#8356;{bank.accounts[0].minBalance}</div>
            </div>
          </div>
          <div className="hover-text-right">
            <div className="head">Available Balance</div>
            <div>&#8356;{bank.accounts[0].balance}</div>
          </div>
        </div>
      );
    }
    else {
      return (<h1  >
        <div class="spinner-grow text-muted"></div>
        <span style={{
          fontSize: "20px",
          color: "black"
        }}>Loading..</span>

      </h1>)
    }
  }
}

export default DebitHover;
