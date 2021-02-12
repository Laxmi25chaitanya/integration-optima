import React ,{useEffect,useState} from 'react';
import './Wallpage.css';

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
    <div className="Head">
      {
          data && data.length>0 && data.map((item)=><p>{item.about}</p>)
       }
     
      <h5 className = "h5">My Accounts</h5>
      <div className = "para">
        <p className ="p1">Total Balance &emsp;&emsp; Total Accounts</p>
        <p className ="p2">&#163; &nbsp;{data.totalAvailableDebitBalance}&emsp;&emsp;&emsp;{data.noOfDebitAccounts}</p>
      </div>
    </div>
  
      );
}

export default WalletPage;
