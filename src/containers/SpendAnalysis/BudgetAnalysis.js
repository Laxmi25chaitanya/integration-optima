import React from 'react'
import { Link } from 'react-router-dom'
import './BudgetAnalysis.css'

function BudgetAnalysis() {
    return (
        <>
            <div className="allbudget">
                <h1>Overall Budget</h1>
            </div>
            <p>Your Monthly Budget</p>
            <br></br>
            <div className="overallbudget">

                <div className='budgetanalysis'>
                    <h2>Bills</h2>
                </div>
                <div className='budgetanalysis'>
                    <h2>charity</h2>
                </div>
                <div className='budgetanalysis'>
                    <h2>Eating Out</h2>
                </div>
                <div className='budgetanalysis'>
                    <h2>Entertainment</h2>
                </div>
                <div className='budgetanalysis'>
                    <h2>Expenses</h2>
                </div>
                <div className='budgetanalysis'>
                    <h2>Family</h2>
                </div>
                <div className='budgetanalysis'>
                    <h2>Family</h2>
                </div><div className='budgetanalysis'>
                    <h2>General</h2>
                </div>
                <div className='budgetanalysis'>
                    <h2>Groceries</h2>
                </div>
                <div className='budgetanalysis'>
                    <h2>Holidays</h2>
                </div>
                <div className='budgetanalysis'>
                    <h2>Personal Care</h2>
                </div>
                <div className='budgetanalysis'>
                    <h2>Shopping</h2>
                </div>
                <div className='budgetanalysis'>
                    <h2>Utilities</h2>
                </div>
                <div className='budgetanalysis'>
                    <h2>Energy</h2>
                </div>
            </div>
        </>
    )
}

export default BudgetAnalysis;
