import React from 'react'
import {useState,useEffect} from "react"
import axios from 'axios';
const Chart = ({month}) => {
    const [weekexpense,setWeekExpense]=useState([])
    let weeks=[]
    useEffect(() => {
      const getExpenseData = async () =>{
        const {data} = await axios('spendAnalysis.json')
        .catch(err=>console.log(err));
        setWeekExpense(data)
      }  
      getExpenseData();
      Object.keys(weekexpense).forEach((key)=>{
        var expense=weekexpense[key];
       Object.keys(expense).forEach((key2)=>{
        console.log(expense[key2].firstWeek)  
       })
  
      })
      }, [month])    
    return (
        <div className="chartgrid">
            <div className="barchart chart">
                <h1>BarChart</h1>
            </div>
            <div className="donutchart chart">
                <h1>DonutChart</h1>
            </div>            
        </div>
    )
}

export default Chart
