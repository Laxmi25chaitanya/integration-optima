import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios';
import Budget from './Budget'
import BarChart from './BarChart';
import PieChart from './PieChart';
const Chart = ({ month }) => {
    const [barChartInput,setBarChartInput]=useState([])
    const [weekexpense, setWeekExpense] = useState([])
    const [dailyusage, setDailyUsage] = useState(0)
    const [totalBudget, setTotalBudget] = useState(0)
    const [remainingBudget, setRemainingBudget] = useState(0)
    let firstweek = 0, secondweek = 0, thirdweek = 0, fourthweek = 0, fifthweek = 0, averageperday = 0,
        totalbudget = 0, remainingbudget = 0;
    let weeks = []
    const AddCharts = () => {
        const getExpenseData = async () => {
            const {data} = await axios('spendanalysis.json')
                                .catch(err => console.log(err));
            setWeekExpense(data);
        }             
        getExpenseData();
        overallmonthsExpense();
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
        setBarChartInput(weeks);
        console.log(barChartInput);
        setDailyUsage(averageperday);
        setRemainingBudget(remainingbudget);
        setTotalBudget(totalbudget);
    }

    useEffect(() => {
        AddCharts();
    }, [month])
    return (
        <>
            <div className="chartgrid">
                <div className="barchart chart">
                    <BarChart barChartInput={barChartInput}/>
                </div>
                <div className="piechart chart">
                    <PieChart/>
                </div>
            </div>
            <Budget dailyusage={dailyusage} remainingBudget={remainingBudget} totalBudget={totalBudget} />
        </>
    )
}

export default Chart

