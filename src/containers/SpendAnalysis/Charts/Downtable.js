import React from 'react';

const Downtable = ({detailExpenses}) => {
    console.log(detailExpenses);
    const getTableRows = () => {
        return detailExpenses.map((expense,key) => (
            <div className="groceries">
                <h1>{expense.category}</h1>
                <p><b>£ {(expense.remainingbudget < 0)? expense.remainingbudget * -1 : expense.remainingbudget}</b> {(expense.expense > expense.totalbudget)? 'Spend more than ': 'Remaining out of'} <b>£ {expense.totalbudget}</b> Total Expense: <b style={(expense.expense > expense.totalbudget)? {color:"red"}:{}}>£ {expense.expense}</b></p>
            </div>
        ))
    }
    return (
        <div className="downtab f-grid card">
            <nav className="downnav">
                <div className="titles">
                    <ul className="downtitles">
                        <li>Category</li>
                        <li>Merchant</li>
                        <li>Country</li>
                    </ul>
                </div>
                <div className="downtable">
                    {getTableRows()}
                </div>
            </nav>
        </div>
    )
}

export default Downtable;
