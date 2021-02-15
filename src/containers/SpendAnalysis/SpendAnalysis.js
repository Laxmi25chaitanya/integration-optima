import './SpendAnalysis.css'
import Chart from './Chart'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'
import {useState} from 'react'
const SpendAnalysis = () => {
    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER"
        , "OCTOBER", "NOVEMBER", "DECEMBER"];
    let d = new Date().getMonth();
    const [index, setIndex] = useState(d)
    const [month, setMonth] = useState(months[index]);

    return(
        <div className="container">
            <div className="topnav">
                <div className="leftslider arrow" >
                    <FaAngleLeft onClick={() =>{
                        setIndex(index - 1 < 0 ? 11 : index - 1)
                        setMonth(months[index])
                    }} />
                </div>
                <div className="middle">
                    <h2>SPEND ANALYSIS</h2>
                    <h1>{month}</h1>
                </div>
                <div className="rightslider arrow">
                    <FaAngleRight onClick={() => {
                        setIndex(index + 1 > 11 ? 0 : index + 1)
                        setMonth(months[index])
                    }} />
                </div>
            </div>
            <Chart month={month}/>
            </div>

    )
}

export default SpendAnalysis
