import SemiCircleProgressBar from "react-progressbar-semicircle"
import BudgetAnalysis from "./BudgetAnalysis";
import { Link } from "react-router-dom";


const Budget = ({ dailyusage, remainingBudget, totalBudget }) => {
    let average = (remainingBudget / totalBudget) * 100;
    average = Math.ceil(average);
    average = average > 0 && average < 100 ? average : 0;

    return (
        <>

            <div className="budget">
                    <div className="link-tag">
                       <Link to='/spendanalysis/budgetanalysis' >
                           Budget
                       </Link>                          
                      
                    </div>
               
                <SemiCircleProgressBar percentage={average} circleRadius={100} showPercentValue />
                <div className="perday-cost">
                    <h2>£{dailyusage} Per day</h2>
                    <h2>£{remainingBudget} Remaining out of £{totalBudget}</h2>
                </div>
            </div>
        </>
    )
}

export default Budget