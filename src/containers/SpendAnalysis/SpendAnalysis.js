import './SpendAnalysis.css'
import Chart from './Chart'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'
import {useState,useEffect} from 'react'
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
const SpendAnalysis = () => {
    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER"
        , "OCTOBER", "NOVEMBER", "DECEMBER"];
    let monthIndex = new Date().getMonth();
    let yearIndex= new Date().getFullYear();
    const [index, setIndex] = useState(monthIndex)
    const [month, setMonth] = useState(months[index]);
    const [year,setYear]=useState(yearIndex);
    useEffect(()=>{
        if(index===11){
            setYear(2020);
        }
        if(index===0){
            setYear(yearIndex);
        }
        setMonth(months[index]);
    },[index])
    return(

        <div>
            <Header/>
            <Menu/>
            <div>
                <div>
                    <div className="sp-container">
                        <div className="sp-topsearch"></div>
                        <div className="sp-topnav">
                            <div className="sp-arrow" >
                                <button className='sp-arrowbutton'> <FaAngleLeft onClick={() =>{
                                    setIndex(index - 1 < 0 ? 11 : index - 1)
                                }} /></button>
                            </div>
                            <div className="sp-middle">
                                <h2>SPEND ANALYSIS</h2>
                                <h1>{month}</h1>
                            </div>

                            <div className="sp-arrow">
                                <button className='sp-arrowbutton'><FaAngleRight onClick={() => {
                                    setIndex(index + 1 > 11 ? 0 : index + 1)
                                }}  /></button>
                            </div>

                        </div>
                        <Chart month={month} year={year}/>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SpendAnalysis
