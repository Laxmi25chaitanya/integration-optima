import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import Budget from './Budget'
import BudgetAnalysis from './BudgetAnalysis';
const Chart = ({ month }) => {
    //States
    const [barchart, setBarChart] = useState({})
    const [options, setOptions] = useState({})
    const [weekexpense, setWeekExpense] = useState([])
    const [dailyusage, setDailyUsage] = useState(0)
    const [totalBudget, setTotalBudget] = useState(0)
    const [remainingBudget, setRemainingBudget] = useState(0)
    const [piedata, setPieData] = useState({})
    const [Pieoptions, setPieOptions] = useState({})
    let firstweek = 0, secondweek = 0, thirdweek = 0, fourthweek = 0, fifthweek = 0, averageperday = 0,
        totalbudget = 0, remainingbudget = 0;
    const AddCharts = () => {
        //Declaration
        let weeks = []
        //let piechart=[]
        //1----Axios to Get Data
        const getExpenseData = async () => {
            const { data } = await axios('spendanalysis.json')
                .catch(err => console.log(err));
            setWeekExpense(data)
        }
        //End of getExpenseData
        //2----Called Functions              
        getExpenseData();
        overallmonthsExpense();
        //getByCategory();

        setBarChart({
            labels: ["1-7", "8-14", "15-21", "22-28", "29-31"],
            datasets: [
                {

                    label: 'weekly spend',
                    data: weeks,
                   
                    backgroundColor: [
                        'rgba(255, 195, 0)',
                        'rgba(27, 94, 32)',
                        'rgba(199, 0, 57)',
                        'rgba(75, 192, 192)',
                        'rgba(244, 81, 30)'
                    ],
                }
            ]
        })
        //End of barGraph
        setOptions({
            legend: { display: false },
            title: {
                display: true,
                text: 'Weekely Spend',
                fontColor: 'black',
                fontFamily: 'Helvetica Neue',
                fontSize: 28,
            },
            responsive: true,
            scales: {
                xAxes: [{
                    gridLines: {
                        display: true,
                    }
                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        stepSize: 500,
                        max: 3000,
                        fontColor: 'black',
                        fontFamily: 'Helvetica Neue',
                        fontSize: 20,
                    },
                    gridLines: {
                        display: false
                    },
                    labels: {
                        fontColor: 'black',
                        fontFamily: 'Helvetica Neue',
                        fontSize: 20,
                    },
                    layout:{
                        padding:{
                            top:5,
                            bottom:5,
                            left:5,
                            right:5
                        }
                    }

                }]
            }
        })
        //--------BarChart


        //---pie chart
        setPieData({
            labels: ["Groceries", "Holidays", "Eating Out", "Shopping"],
            datasets: [{
                data: [150, 220, 146, 75],
                fill: false,
                lineTension: 0.2,
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(24, 106, 59)',
                ],
                borderColor: 'rgba(0,0,0)',
                borderWidth: 0,

            }]
        })

        setPieOptions({
            title: {
                display: true,
                fontSize: 20
            },
            legend: {
                display: true,
                position: 'right'
            }
        })

        function overallmonthsExpense() {
            Object.keys(weekexpense).forEach((key) => {
                var expense = weekexpense[key];
                Object.keys(expense).forEach((key2) => {
                    if (expense[key2].spendMonthYear === `${month}2020`) {
                        firstweek += parseInt(expense[key2].firstWeek);
                        secondweek += parseInt(expense[key2].secondWeek);
                        thirdweek += parseInt(expense[key2].thirdWeek);
                        fourthweek += parseInt(expense[key2].fourthWeek);
                        fifthweek += parseInt(expense[key2].fifthWeek);
                        averageperday += parseInt(expense[key2].averagePerDay);
                        remainingbudget += parseInt(expense[key2].remainingBudget);
                        totalbudget += parseInt(expense[key2].totalBudget);
                    }
                })
            })
        }
        //End of Budget and Week analysis calculation
        weeks.push(firstweek);
        weeks.push(secondweek);
        weeks.push(thirdweek);
        weeks.push(fourthweek);
        weeks.push(fifthweek);
        setDailyUsage(averageperday);
        setRemainingBudget(remainingbudget);
        setTotalBudget(totalbudget);
        
        //Pie Chart Function
        /*function getByCategory(){
                Object.keys(weekexpense).forEach((key)=>{
                    example=weekexpense[key];
                })

        }*/
    }

    //Use Effect
    useEffect(() => {
        AddCharts();
    }, [month])
    //End of use Effect

    return (
        <>
            <div className="chartgrid">
                <div className="barchart chart">
                    <Bar data={barchart} options={options} height={500} width={700}/>
                </div>
                <div className="piechart chart">
                    <Pie data={piedata} options={Pieoptions} height={200} />
                </div>
            </div>
            <Budget dailyusage={dailyusage} remainingBudget={remainingBudget} totalBudget={totalBudget} />
        </>
    )
}

export default Chart

