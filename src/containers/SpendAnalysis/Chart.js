import React from 'react'
import {useState,useEffect} from "react"
import axios from 'axios';
import {Bar} from 'react-chartjs-2';

const Chart = ({month}) => {
    //States
    const[barchart,setBarChart]=useState({})
    const[options,setOptions]=useState({})
    const [weekexpense,setWeekExpense]=useState([])
        const AddCharts=()=>{
            //Declaration
            let weeks=[]
//1----Axios to Get Data
            const getExpenseData = async () =>{
                const {data} = await axios('spendanalysis.json')
                .catch(err=>console.log(err));
                setWeekExpense(data)              
                }
                //End of getExpenseData
 //2----Called Functions              
              getExpenseData();            
              overallmonthsExpense();           
            
            setBarChart({
                    labels: ["1-7", "8-14","15-21","22-28","29-31"],
                    datasets: [
                        {
                           
                            label: 'weekly spend',
                            data: weeks,
                            backgroundColor:[
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)'
                              ]
                        }
                    ]
             })
            //End of barGraph
            setOptions({
                legend: { display: false },
                title: {
                  display: true,
                  text: 'Weekly Expense'
                },
                responsive: true,
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                      }
                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        stepSize: 100,
                    },
                    gridLines: {
                        display: false
                      }
                }]
            }
            })
 //--------BarChart
 function overallmonthsExpense(){
    Object.keys(weekexpense).forEach((key)=>{
        var expense=weekexpense[key];
       Object.keys(expense).forEach((key2)=>{
        if(expense[key2].spendMonthYear===`${month}2020`){
        weeks.push(parseInt(expense[key2].firstWeek));
        weeks.push(parseInt(expense[key2].secondWeek));
        weeks.push(parseInt(expense[key2].thirdWeek));
        weeks.push(parseInt(expense[key2].fourthWeek));
        weeks.push(parseInt(expense[key2].fifthWeek)); 
        }
       })
    })
}
//Donut Chart
     
 }

                
  useEffect(() => {
        AddCharts();
    }, [month])


     return (
        <div className="chartgrid">
            <div className="barchart chart">
            <Bar data={barchart} options={options}/> 
            </div>
            <div className="donutchart chart">
                <h1>DonutChart</h1>
            </div>            
        </div>
    )
}

export default Chart
