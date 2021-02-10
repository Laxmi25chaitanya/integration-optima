import React from 'react'
import {useState,useEffect} from "react"
import axios from 'axios';
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Chart = ({month}) => {
    const weeks=[0,0,0,0,0]
    const [weekexpense,setWeekExpense]=useState([])
    const options = {
        axisY: {
            valueFormatString: "$#######.00",
        },
        data: [{
            name: "WEEKLY SPEND",
            showInLegend: true,
            type: "column",
            dataPoints: [
                { label: "1-7", y: 10, },
                { label: "8-14", y: 15, },
                { label: "15-21", y: 25, },
                { label: "22-27", y: 30, },
                { label: "28-30", y: 28, }
            ]
        }]
    }

    useEffect(() => {
      const getExpenseData = async () =>{
        const {data} = await axios('data.json')
        .catch(err=>console.log(err));
        setWeekExpense(data)
      }  
      getExpenseData();
      Object.keys(weekexpense).forEach((key)=>{
        var expense=weekexpense[key];
       Object.keys(expense).forEach((key2)=>{
        if(expense[key2].spendMonthYear===`${month}2020`){
        weeks[0]+=expense[key2].firstWeek;
        weeks[1]+=expense[key2].secondWeek;
        weeks[2]+=expense[key2].thirdWeek;
        weeks[3]+=expense[key2].fourthWeek;
        weeks[4]+=expense[key2].fifthWeek; 
        }
       })
      })
      console.log(`${month}2020`,weeks);
    }, [month]) 
     return (
        <div className="chartgrid">
            <div className="barchart chart">
            <CanvasJSChart options={options} /> 
            </div>
            <div className="donutchart chart">
                <h1>DonutChart</h1>
            </div>            
        </div>
    )
}

export default Chart
