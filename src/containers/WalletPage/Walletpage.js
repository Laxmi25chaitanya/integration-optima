import React, {useEffect, useState} from 'react';
import './Wallpage.css';
import cardInfo from './cardInfo.json';
import hsbc from './hsbc.png';
import halifax from './halifax.png';
import barclays from './barclays.png';
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import api from '../../config/api'
function WalletPage() {

    const [data, setData] = useState([]);
    const getData = () => {
        fetch(api.totalBalances
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    return (

        <div>
            <Header/>
            <Menu/>
            <div>
                <div>
                    <div className="Main">
                        <div className="Head">
                            <h5 className="h5">My Accounts</h5>
                            <div className="para">
                                <p className="hp1">&nbsp;&emsp;Total Balance &emsp;&emsp; Total Accounts</p>
                                <p className="hp2">&#163; {data.totalAvailableDebitBalance} &emsp;&emsp;&emsp;{data.noOfDebitAccounts}</p>
                                <p></p>
                            </div>
                        </div>
                        <div className="cardInfo1">
                            <img id="myImg" src={halifax} width="310" height="120" alt="Card1"/>
                            <p className="cp1">&emsp;{cardInfo.banks[0].bankName}</p>
                            <p className="cp2">&emsp;{cardInfo.banks[0].accounts[0].interestRate} %AER</p>
                            <p className="cp3">Total Balance  &nbsp;&nbsp;&nbsp;&emsp;&emsp;Payment Instructions</p>
                            <p className="cp4v1">&emsp;&#163; {cardInfo.banks[0].accounts[0].balance}  &emsp;&emsp;&emsp; &#163; {cardInfo.banks[0].accounts[0].standingInst}  </p>
                            <a className="Link1" href="https://">View Details</a>
                            <p className="cp5">&nbsp;Minimum Balance &emsp; Unutilized Balance </p>
                            <p className="cp6v2">&emsp;&#163; {cardInfo.banks[0].accounts[0].minBalance}&nbsp;&nbsp;&nbsp;&emsp; &#163; {cardInfo.banks[0].accounts[0].availableBalance} </p>
                            <button className="button">OPTIMIZE</button>
                        </div>

                        <div className="cardInfo2">
                            <img id="myImg1" src={hsbc} width="287" height="120" alt="Card2"/>
                            <p className="cp1">&emsp;{cardInfo.banks[1].bankName}</p>
                            <p className="cp2">&emsp;{cardInfo.banks[1].accounts[0].interestRate} %AER</p>
                            <p className="cp3">Total Balance &nbsp;&nbsp;&nbsp;&emsp;&emsp; Payment Instructions</p>
                            <p className="cp4v1">&emsp;&#163; {cardInfo.banks[1].accounts[0].balance}  &emsp;&emsp; &#163; {cardInfo.banks[1].accounts[0].standingInst}  </p>
                            <a className="Link2" href="https://">View Details </a>
                            <p className="cp5">&nbsp;Minimum Balance &emsp; Unutilized Balance </p>
                            <p className="cp6v2">&emsp;&#163; {cardInfo.banks[1].accounts[0].minBalance}&nbsp;&nbsp;&nbsp;&emsp;&emsp; &#163; {cardInfo.banks[1].accounts[0].availableBalance} </p>
                            <button className="button">OPTIMIZE</button>
                        </div>

                        <div className="cardInfo3">
                            <img id="myImg2" src={barclays} width="287" height="120" alt="Card3"/>
                            <p className="cp1">&emsp;{cardInfo.banks[2].bankName}</p>
                            <p className="cp2">&emsp;{cardInfo.banks[2].accounts[0].interestRate} %AER</p>
                            <p className="cp3">Total Balance &nbsp;&nbsp;&nbsp;&emsp;&emsp; Payment Instructions</p>
                            <p className="cp4v1">&emsp;&#163; {cardInfo.banks[2].accounts[0].balance}  &nbsp;&emsp;&emsp; &#163; {cardInfo.banks[2].accounts[0].standingInst}  </p>
                            <a className="Link3" href="https://"> View Details </a>
                            <p className="cp5">&nbsp;Minimum Balance &emsp; Unutilized Balance </p>
                            <p className="cp6v2">&emsp;&#163; {cardInfo.banks[2].accounts[0].minBalance} &nbsp;&nbsp;&nbsp;&emsp;&emsp; &#163; {cardInfo.banks[2].accounts[0].availableBalance} </p>
                            <button className="button">OPTIMIZE</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default WalletPage;
