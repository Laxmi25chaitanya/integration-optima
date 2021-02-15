import React from 'react'
import {Pie} from 'react-chartjs-2';
import { useState, useEffect } from "react"
const PieChart = () => {
    const [piedata, setPieData] = useState({})
    const [Pieoptions, setPieOptions] = useState({})
        const addPieChart=()=>{
            setPieData({
                labels: ["Groceries", "Holidays", "Eating Out", "Shopping"],
                datasets: [{
                    data: [150, 220, 146, 75],
                    fill: false,
                    lineTension: 0.2,
                    backgroundColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(24, 106, 59)',
                    ],
                    borderColor: 'rgba(0,0,0)',
                    borderWidth: 0,
    
                }]
            })    
            setPieOptions({
                title: {
                    display: true,
                    fontSize: 20
                },
                legend: {
                    display: true,
                    position: 'right'
                }
            })

        }
    useEffect(()=>{
            addPieChart();
    },[])

    return (
        <div>
             <Pie data={piedata} options={Pieoptions} height={200} />
        </div>
    )
}

export default PieChart
