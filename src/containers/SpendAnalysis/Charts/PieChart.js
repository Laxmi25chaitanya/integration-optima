import React from 'react'
import {Pie} from 'react-chartjs-2';
import {useState, useEffect} from "react"

const PieChart = ({pieChartInput, pieChartLabels}) => {
    const [piedata, setPieData] = useState({})
    const [Pieoptions, setPieOptions] = useState({})
    const addPieChart = () => {
        setPieData({
            labels: pieChartLabels,
            datasets: [{
                data: pieChartInput,
                fill: false,
                lineTension: 0.2,
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(136, 14, 79)',
                    'rgba(255, 206, 86)',
                    'rgba(24, 106, 59)',
                    'rgba(183, 28, 28)',
                    'rgba(1, 87, 155)',
                    'rgba(62, 39, 35)',
                    'rgba(3, 169, 244)',
                    'rgba(130, 119, 23)',
                    'rgba(54, 162, 235)',


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
    useEffect(() => {
        addPieChart();
    }, [pieChartInput])

    return (
        <div>
            <Pie data={piedata} options={Pieoptions} height={200}/>
        </div>
    )
}

export default PieChart
