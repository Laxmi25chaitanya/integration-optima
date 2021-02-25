import React, { Component } from 'react';
class CreditHover extends Component {
  state = {}
  render() {
    let minbalance, showdue;
    if (this.props.bankdetails.accounts[0].minBalanceDue) {
      minbalance = <MinBalanceExist bank={this.props.bankdetails.accounts[0]}></MinBalanceExist>
      showdue = <ShowMinDue bank={this.props.bankdetails.accounts[0]}></ShowMinDue>
    } else {
      minbalance = <MinBalanceNotExist bank={this.props.bankdetails.accounts[0]}></MinBalanceNotExist>
      showdue = <ShowPrincipalDue bank={this.props.bankdetails.accounts[0]}></ShowPrincipalDue>
    }
    if (this.props.bankdetails) {
      const bank = this.props.bankdetails;
      const index=this.props.index;
      return (<div className="hover-card-main">
        <div>
          <img className="homeimg" src={`./homeassets/credit${index}.png`} alt={bank.bankName} height="110px" />
        </div>
        <div className="hover-text-left ">
          <div>
            <div className="head">Banks</div>
            <div>{bank.bankName}</div>
          </div>
          {minbalance}
        </div>
        <div className="hover-text-right">
          {showdue}
          <div>
            <div className="head">Due Date</div>
            {new Date(
              eval(bank.accounts[0].dueDate)
            ).toDateString()}
          </div>
        </div>
      </div>

      );
    }
  }
}

function MinBalanceExist(props) {
  return (<div>
    <div>
      <div className="head">Credit limit</div>
      <div> &#8356;{props.bank.creditLimit}</div>
    </div>
    <div>
      <div className="head">Available Credit</div>
      <div> &#8356;{props.bank.availableCredit}</div>
    </div>
  </div>)
}

function MinBalanceNotExist(props) {
  return (<div>
    <div className="head">Remaining Full Term</div>
    <div>
      &#8356;{props.bank.remainingFullTerm}
    </div>
  </div>)
}
function ShowMinDue(props) {
  return (
    <div>
      <div className="head">Minimum due balance </div>
      <div>&#8356;{props.bank.minBalanceDue}</div>
    </div>
  )
}

function ShowPrincipalDue(props) {
  return (
    <div>
      <div className="head">Principal Due</div>
      <div>&#8356;{props.bank.totalBalanceDue}</div>
    </div>
  )
}


export default CreditHover;