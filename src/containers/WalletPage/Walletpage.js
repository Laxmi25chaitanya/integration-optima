import React ,{useEffect,useState} from 'react';
import './Wallpage.css';
// import './normalize.css';
import cardInfo from './cardInfo.json';
import hsbc from './hsbc.png';
import halifax from './halifax.png';
import barclays from './barclays.png';

function WalletPage () {

    const [data,setData]=useState([]);
    const getData=()=>{
      fetch('data.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])

    return (
      <div className ="Main">
    <div className="Head">
      <h5 className = "h5">My Accounts</h5>
      <div className = "para">
        <p className ="p1">Total Balance &emsp;&emsp; Total Accounts</p>
        <p className ="p2">&#163; &nbsp;{ data.totalAvailableDebitBalance }&emsp;&emsp;&emsp;{data.noOfDebitAccounts}</p>
        <p></p>
      </div>
    </div>
    <div className="cardInfo1">
    <img id="myImg" src={halifax}  width="310" height="120" alt="Card1"/>
    <p className="cp1">{cardInfo.banks[0].bankName}</p>
    <p className="cp2">{cardInfo.banks[0].accounts[0].interestRate} %AER</p>
    <p className="cp3">Total Balance &nbsp; Payment instructions</p>
    <p className = "cp4v1">&#163; {cardInfo.banks[0].accounts[0].balance}  &emsp;&emsp;&emsp; &#163;{cardInfo.banks[0].accounts[0].standingInst}  </p>
    <p className="cp5">Minimum balance &nbsp; Unutilized balance </p>
    <p className= "cp6v2">&#163;{cardInfo.banks[0].accounts[0].minBalance}&emsp;&emsp; &#163; {cardInfo.banks[0].accounts[0].availableBalance} </p>
    <button className="button">OPTIMIZE</button>
    </div>

    <div className="cardInfo2">
    <img id="myImg1" src={hsbc}  width="287" height="120" alt="Card2"/>
    <p className="cp1">{cardInfo.banks[1].bankName}</p>
    <p className="cp2">{cardInfo.banks[1].accounts[0].interestRate} %AER</p>
    <p className="cp3">Total Balance &nbsp; Payment instructions</p>
    <p className = "cp4v1">&#163; {cardInfo.banks[1].accounts[0].balance}  &emsp; &#163;{cardInfo.banks[1].accounts[0].standingInst}  </p>
    <p className="cp5">Minimum balance &nbsp; Unutilized balance </p>
    <p className= "cp6v2">&#163;{cardInfo.banks[1].accounts[0].minBalance}&emsp;&emsp;&emsp; &#163; {cardInfo.banks[1].accounts[0].availableBalance} </p>
    <button className="button">OPTIMIZE</button>
    </div>

    <div className="cardInfo3">
    <img id="myImg2" src={barclays}  width="287" height="120" alt="Card3"/>
    <p className="cp1">{cardInfo.banks[2].bankName}</p>
    <p className="cp2">{cardInfo.banks[2].accounts[0].interestRate} %AER</p>
    <p className="cp3">Total Balance &nbsp; Payment instructions</p>
    <p className = "cp4v1">&#163; {cardInfo.banks[2].accounts[0].balance}  &emsp; &#163;{cardInfo.banks[2].accounts[0].standingInst}  </p>
    <p className="cp5">Minimum balance &nbsp; Unutilized balance </p>
    <p className= "cp6v2">&#163;{cardInfo.banks[2].accounts[0].minBalance}&emsp;&emsp;&emsp; &#163; {cardInfo.banks[2].accounts[0].availableBalance} </p>
    <button className="button">OPTIMIZE</button>

    
    </div>
    </div>
      );
}

export default WalletPage;
