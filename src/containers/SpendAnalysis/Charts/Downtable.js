import React from 'react';
const Downtable = ({ remainingBudget, totalBudget }) => {
    return (
        <div className="downtab">
            <nav className="downnav">
                <div className="titles">
                    <ul className="downtitles">
                        <li>Category</li>
                        <li>Merchanct</li>
                        <li>Country</li>
                    </ul>
                </div>
                <div className="downtable">
                    <div className="groceries">
                        <h1>Grocires</h1>
                        <p>£{remainingBudget} Remaining out of £{totalBudget}</p>
                    </div>
                    <hr></hr>
                    <div className="holidays">
                        <h1>Holidays</h1>
                        <p>£{remainingBudget} Remaining out of £{totalBudget}</p>
                    </div>
                    <hr></hr>
                    <div className="eatingout">
                        <h1>Eating Out</h1>
                        <p>£{remainingBudget} Remaining out of £{totalBudget}</p>
                    </div>
                    <hr></hr>
                    <div className="shopping">
                        <h1>Shopping</h1>
                        <p>£{remainingBudget} Remaining out of £{totalBudget}</p>
                    </div>
                    <hr></hr>
                </div>
            </nav>
        </div>
    )
}

export default Downtable;
