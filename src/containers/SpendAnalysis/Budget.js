import SemiCircleProgressBar from "react-progressbar-semicircle"

const Budget = ({ dailyusage, remainingBudget, totalBudget }) => {
    let average = (totalBudget - remainingBudget) / 100 

    return (
        <div className="budget">
            <div className="link-tag">
                <a href="">Budget</a>
            </div>
            <SemiCircleProgressBar percentage={average} circleRadius={100} showPercentValue />
            <div className="perday-cost">
                <h2>£{dailyusage} Per day</h2>
                <h2>£{remainingBudget} Remaining out of £{totalBudget}</h2>
            </div>
        </div>
    )
}

export default Budget