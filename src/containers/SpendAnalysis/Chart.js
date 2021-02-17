import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios';
import Budget from './Charts/Budget'
import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart';
import DownTable from './Charts/Downtable'
import amount0 from './images/amount0.gif';


const Chart = ({ month,year }) => {
    const [pieChartLabels,setPieChartLabels]=useState([])
    const [barChartInput,setBarChartInput]=useState([])
    const [pieChartInput,setPieChartInput]=useState([])
    const [weekexpense, setWeekExpense] = useState({})
    const [dailyusage, setDailyUsage] = useState(0)
    const [totalBudget, setTotalBudget] = useState(0)
    const [remainingBudget, setRemainingBudget] = useState(0)   
    const monthyear=`${month}${year}`
    let piecharts=[];
    let pieLabels=[];
        const AddCharts = () => {
        let weeks = [];
        let firstweek = 0, secondweek = 0, thirdweek = 0, fourthweek = 0, fifthweek = 0, averageperday = 0,
            totalbudget = 0, remainingbudget = 0;
        const getExpenseData = async () => {
            const { data } = await axios('spendanalysis.json', 
            {
                headers: {
                'Content-Type': 'application/json'
            }})
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
                console.log(key)
                if(key==='Groceries'){                   
                    Object.keys(expense).forEach((key2)=>{
                        if(expense[key2].spendMonthYear===monthyear){
                            if(expense[key2].totalBudget !== 0){
                                pieLabels.push(key);
                                piecharts.push(expense[key2].totalBudget);
                            }
                        }
                    
                })}
                if(key==='Personal Care'){                   
                    Object.keys(expense).forEach((key2)=>{
                        if(expense[key2].spendMonthYear===monthyear){
                            if(expense[key2].totalBudget !== 0){
                                pieLabels.push(key);
                                piecharts.push(expense[key2].totalBudget);
                            }
                        }
                    
                })}
                if(key==='Entertainment'){                   
                    Object.keys(expense).forEach((key2)=>{
                        if(expense[key2].spendMonthYear===monthyear){
                            if(expense[key2].totalBudget !== 0){
                                pieLabels.push(key);
                                piecharts.push(expense[key2].totalBudget);
                            }
                        }
                    
                })}
                if(key==='Expenses'){                   
                    Object.keys(expense).forEach((key2)=>{
                        if(expense[key2].spendMonthYear===monthyear){
                            if(expense[key2].totalBudget !== 0){
                                pieLabels.push(key);
                                piecharts.push(expense[key2].totalBudget);
                            }
                        }
                    
                })}
                if(key==='Income'){                   
                    Object.keys(expense).forEach((key2)=>{
                        if(expense[key2].spendMonthYear===monthyear){
                            if(expense[key2].totalBudget !== 0){
                                pieLabels.push(key);
                                piecharts.push(expense[key2].totalBudget);
                            }
                        }
                    
                })}
                if(key==='Holidays'){                   
                    Object.keys(expense).forEach((key2)=>{
                        if(expense[key2].spendMonthYear===monthyear){
                            if(expense[key2].totalBudget !== 0){
                                pieLabels.push(key);
                                piecharts.push(expense[key2].totalBudget);
                            }
                        }
                    
                })}
                if(key==='Utilities'){                   
                    Object.keys(expense).forEach((key2)=>{
                        if(expense[key2].spendMonthYear===monthyear){
                            if(expense[key2].totalBudget !== 0){
                                pieLabels.push(key);
                                piecharts.push(expense[key2].totalBudget);
                            }
                        }
                    
                })}
                if(key==='Eating Out'){                   
                    Object.keys(expense).forEach((key2)=>{
                        if(expense[key2].spendMonthYear===monthyear){
                            if(expense[key2].totalBudget !== 0){
                                pieLabels.push(key);
                                piecharts.push(expense[key2].totalBudget);
                            }
                        }
                    
                })}
                if(key==='Family'){                   
                    Object.keys(expense).forEach((key2)=>{
                        if(expense[key2].spendMonthYear===monthyear){
                            if(expense[key2].totalBudget !== 0){
                                pieLabels.push(key);
                                piecharts.push(expense[key2].totalBudget);
                            }
                        }
                    
                })}
                if(key==='Shopping'){                   
                    Object.keys(expense).forEach((key2)=>{
                        if(expense[key2].spendMonthYear===monthyear){
                            if(expense[key2].totalBudget !== 0){
                                pieLabels.push(key);
                                piecharts.push(expense[key2].totalBudget);
                            }
                        }
                    
                })}
                if(key==='Charity'){                   
                    Object.keys(expense).forEach((key2)=>{
                        if(expense[key2].spendMonthYear===monthyear){
                            if(expense[key2].totalBudget !== 0){
                                pieLabels.push(key);
                                piecharts.push(expense[key2].totalBudget);
                            }
                        }
                    
                })}
                if(key==='Bills'){                   
                    Object.keys(expense).forEach((key2)=>{
                        if(expense[key2].spendMonthYear===monthyear){
                            if(expense[key2].totalBudget !== 0){
                                pieLabels.push(key);
                                piecharts.push(expense[key2].totalBudget);
                            }
                        }
                    
                })}
            })
        }

        weeks.push(firstweek, secondweek, thirdweek, fourthweek, fifthweek);
        setPieChartInput(piecharts);
        setPieChartLabels(pieLabels);
        setBarChartInput(weeks);
        setDailyUsage(averageperday);
        setRemainingBudget(remainingbudget);
        setTotalBudget(totalbudget);
    }
    useEffect(() => {
        AddCharts();
    }, [month])

    if (totalBudget === 0) {
        return (
            <div className='amount0'>
                <img src={amount0} alt="amount0" />
                <br></br>
                <div className='displayline'>
                    <p> {month} {year}, spend amount is £0</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <>
                <div className="chartgrid">
                    <div className="barchart chart">
                        <BarChart barChartInput={barChartInput} />
                    </div>
                    <div className="piechart chart">
                        <PieChart pieChartInput={pieChartInput} pieChartLabels={pieChartLabels}/>
                    </div>
                </div>
                <Budget dailyusage={dailyusage} remainingBudget={remainingBudget} totalBudget={totalBudget} />
                <DownTable />
            </>
        )
    }
}

export default Chart

