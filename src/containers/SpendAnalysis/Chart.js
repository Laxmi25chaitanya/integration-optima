import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import Budget from './Budget'
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


    const AddCharts = () => {
        //Declaration
        let weeks = []
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


        setBarChart({
            labels: ["1-7", "8-14", "15-21", "22-28", "29-31"],
            datasets: [
                {

                    label: 'weekly spend',
                    data: weeks,
                    borderColor: ['rgba(22,85,79,20)',
                        'rgba(22,85,79,20)',
                        'rgba(22,85,79,20)',
                        'rgba(22,85,79,20)'],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)'
                    ],
                }
            ]
        })
        //End of barGraph
        setOptions({
            legend: { display: false },
            title: {
                display: true,
                text: 'Weekly Expense',
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
                    }

                }]
            }
        })
        //--------BarChart


        //---pie chart
        setPieData({
            labels: ["groceries", "eating out", "shopping", "netflix"],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
            ],
            datasets: [{
                data: [450, 820, 46, 75],
                fill: false,
                lineTension: 0.2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderColor: 'rgba(0,0,0,0.4)',
                borderWidth: 2,

            }]
        })

        setPieOptions({
            title:{
                display:true,
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
        })



        function overallmonthsExpense() {
            Object.keys(weekexpense).forEach((key) => {
                var expense = weekexpense[key];
                Object.keys(expense).forEach((key2) => {
                    if (expense[key2].spendMonthYear === `${month}2020`) {
                        weeks.push(parseInt(expense[key2].firstWeek));
                        weeks.push(parseInt(expense[key2].secondWeek));
                        weeks.push(parseInt(expense[key2].thirdWeek));
                        weeks.push(parseInt(expense[key2].fourthWeek));
                        weeks.push(parseInt(expense[key2].fifthWeek));
                        setDailyUsage(parseInt(expense[key2].averagePerDay));
                        setRemainingBudget(parseInt(expense[key2].remainingBudget));
                        setTotalBudget(parseInt(expense[key2].totalBudget));
                    }
                })
            })
        }


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
                    <Bar data={barchart} options={options} />
                </div>
                <div className="donutchart chart">
                    <Pie data={piedata} options={Pieoptions} />
                </div>
            </div>
            <Budget dailyusage={dailyusage} remainingBudget={remainingBudget} totalBudget={totalBudget} />
        </>
    )
}

export default Chart

