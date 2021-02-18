import React from 'react'
import {useState, useEffect} from "react"
import axios from 'axios';
import Budget from './Charts/Budget'
import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart';
import DownTable from './Charts/Downtable'
import amount0 from './images/amount0.gif';

const Chart = ({month, year}) => {
    const [pieChartLabels, setPieChartLabels] = useState([])
    const [barChartInput, setBarChartInput] = useState([])
    const [pieChartInput, setPieChartInput] = useState([])
    const [detailExpenses, setDetailExpense] = useState([])
    const [weekexpense, setWeekExpense] = useState({})
    const [dailyusage, setDailyUsage] = useState(0)
    const [totalBudget, setTotalBudget] = useState(0)
    const [remainingBudget, setRemainingBudget] = useState(0)
    const monthyear = `${month}${year}`
    let costByExpense = {};
    let detailExpensesCal = []
    let category = ['Groceries',
        'Personal Care',
        'Entertainment',
        'Expenses',
        'Income',
        'Holidays',
        'Utilities',
        'Eating Out',
        'Family',
        'Shopping',
        'Charity',
        'Bills']
    const AddCharts = () => {
        let weeks = [];
        let firstweek = 0, secondweek = 0, thirdweek = 0, fourthweek = 0, fifthweek = 0, averageperday = 0,
            totalbudget = 0, remainingbudget = 0;
        const getExpenseData = async () => {
            const {data} = await axios('spendanalysis.json',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'userId':'121212'
                    }
                })
                .catch(err => console.log(err));
            setWeekExpense(data);
        }
        getExpenseData();
        overallmonthsExpense();
        getpiechart();

        function overallmonthsExpense() {
            Object.keys(weekexpense).forEach((key) => {
                var expense = weekexpense[key];
                Object.keys(expense).forEach((key2) => {
                    if (expense[key2].spendMonthYear === monthyear) {
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
        function getpiechart() {
            Object.keys(weekexpense).forEach((key) => {
                var expense = weekexpense[key];
                if (category.includes(key)) {
                    Object.keys(expense).forEach((key2) => {
                        if (expense[key2].spendMonthYear === monthyear) {
                            if (expense[key2].totalBudget !== 0) {
                                costByExpense[key] = expense[key2].totalBudget - expense[key2].remainingBudget
                                detailExpensesCal.push(
                                    {
                                        category:key,
                                        expense: (expense[key2].totalBudget - expense[key2].remainingBudget).toFixed(2),
                                        totalbudget:expense[key2].totalBudget.toFixed(2),
                                        remainingbudget:expense[key2].remainingBudget.toFixed(2)
                                    }
                                )
                            }
                        }
                    })
                }
            })
        }

        weeks.push(firstweek, secondweek, thirdweek, fourthweek, fifthweek);
        setPieChartInput(Object.values(costByExpense));
        setPieChartLabels(Object.keys(costByExpense));
        setBarChartInput(weeks);
        setDailyUsage(averageperday);
        setRemainingBudget(remainingbudget);
        setTotalBudget(totalbudget);
        setDetailExpense(detailExpensesCal);
    }
    useEffect(() => {
        AddCharts();
    }, [month])

    if (totalBudget === 0) {
        return (
            <div className='amount0'>
                <img src={amount0} alt="amount0"/>
                <br></br>
                <div className='displayline'>
                    <p> {month} {year}, spend amount is £0</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="page-body">
                <div className="chartgrid">
                    <div className="barchart card col">
                        <BarChart barChartInput={barChartInput}/>
                    </div>
                    <div className="piechart card col">
                        <PieChart pieChartInput={pieChartInput} pieChartLabels={pieChartLabels}/>
                    </div>
                </div>
                <Budget dailyusage={dailyusage} remainingBudget={remainingBudget} totalBudget={totalBudget}/>
                <DownTable detailExpenses={detailExpenses}/>
            </div>
        )
    }
}

export default Chart

