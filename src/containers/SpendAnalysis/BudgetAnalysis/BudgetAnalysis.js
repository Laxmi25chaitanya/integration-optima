import React from 'react'
import './BudgetAnalysis.css'
import ProgressBar from './budgetanalysis-component'

const testData = [
    { bgcolor: "green", completed: 0 },
];

const BudgetAnalysis = ({ remainingBudget, totalBudget, dailyusage }) => {
    return (
        <div className="container">
            <div className="allbudget">
                <h1>Overall Budget</h1>
                {testData.map((item, idx) => (
                    <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                ))}
                <h3>£{remainingBudget} Remaining out of £{totalBudget}</h3>
                <h2>Last Month Spend £{dailyusage} </h2>
            </div>
            <br></br>
            <br></br>
            <p>Your monthly budget</p>
            <br></br>
            <br></br>
            <div className="overallbudget">
                <div className='budgetanalysis'>
                    <h2>Bills</h2>
                    <br></br>
                    <h4>+ £{remainingBudget} - </h4>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                    <h3>£{remainingBudget} Remaining out of £{totalBudget}</h3>
                </div>
                <div className='budgetanalysis'>
                    <h2>charity</h2>
                    <br></br>
                    <h4>+ £{remainingBudget} - </h4>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                    <h3>£{remainingBudget} Remaining out of £{totalBudget}</h3>
                </div>
                <div className='budgetanalysis'>
                    <h2>Eating Out</h2>
                    <br></br>
                    <h4>+ £{remainingBudget} - </h4>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                    <h3>£{remainingBudget} Remaining out of £{totalBudget}</h3>
                </div>
                <div className='budgetanalysis'>
                    <h2>Entertainment</h2>
                    <br></br>
                    <h4>+ £{remainingBudget} - </h4>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                    <h3>£{remainingBudget} Remaining out of £{totalBudget}</h3>
                </div>
                <div className='budgetanalysis'>
                    <h2>Expenses</h2>
                    <br></br>
                    <h4>+ £{remainingBudget} - </h4>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                    <h3>£{remainingBudget} Remaining out of £{totalBudget}</h3>
                </div>
                <div className='budgetanalysis'>
                    <h2>Family</h2>
                    <br></br>
                    <h4>+ £{remainingBudget} - </h4>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                    <h3>£{remainingBudget} Remaining out of £{totalBudget}</h3>
                </div>
                <div className='budgetanalysis'>
                    <h2>Family</h2>
                    <br></br>
                    <h4>+ £{remainingBudget} - </h4>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                    <h3>£{remainingBudget} Remaining out of £{totalBudget}</h3>
                </div>
                <div className='budgetanalysis'>
                    <h2>General</h2>
                    <br></br>
                    <h4>+ £{remainingBudget} - </h4>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                    <h3>£{remainingBudget} Remaining out of £{totalBudget}</h3>
                </div>
                <div className='budgetanalysis'>
                    <h2>Groceries</h2>
                    <br></br>
                    <h4>+ £{remainingBudget} - </h4>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                    <h3>£{remainingBudget} Remaining out of £{totalBudget}</h3>
                </div>
                <div className='budgetanalysis'>
                    <h2>Holidays</h2>
                    <br></br>
                    <h4>+ £{remainingBudget} - </h4>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                    <h3>£{remainingBudget} Remaining out of £{totalBudget}</h3>
                </div>
                <div className='budgetanalysis'>
                    <h2>Personal Care</h2>
                    <br></br>
                    <h4>+ £{remainingBudget} - </h4>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                    <h3>£{remainingBudget} Remaining out of £{totalBudget}</h3>
                </div>
                <div className='budgetanalysis'>
                    <h2>Shopping</h2>
                    <br></br>
                    <h4>+ £{remainingBudget} - </h4>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                    <h3>£{remainingBudget} Remaining out of £{totalBudget}</h3>
                </div>
                <div className='budgetanalysis'>
                    <h2>Utilities</h2>
                    <br></br>
                    <h4>+ £{remainingBudget} - </h4>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                    <h3>£{remainingBudget} Remaining out of £{totalBudget}</h3>
                </div>
                <div className='budgetanalysis'>
                    <h2>Energy</h2>
                    <br></br>
                    <h4>+ £{remainingBudget} - </h4>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                    <h3>£{remainingBudget} Remaining out of £{totalBudget}</h3>
                </div>
            </div>
        </div>
    )
}

export default BudgetAnalysis;