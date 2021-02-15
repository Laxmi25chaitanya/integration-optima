import React from 'react'
import {Bar} from 'react-chartjs-2';
import { useState, useEffect } from "react"
const BarChart = ({barChartInput}) => {
    const [weeks,setWeeks]=useState([])
    const [barchart, setBarChart] = useState({})
    const [options, setOptions] = useState({})
        const addBarChart=()=>{
            setWeeks(barChartInput);
            setBarChart({
                labels: ["1-7", "8-14", "15-21", "22-28", "29-31"],
                datasets: [
                    {
    
                        label: 'weekly spend',
                        data: weeks,                       
                        backgroundColor: [
                            'rgba(255, 195, 0)',
                            'rgba(27, 94, 32)',
                            'rgba(199, 0, 57)',
                            'rgba(75, 192, 192)',
                            'rgba(244, 81, 30)'
                        ],
                    }
                ]
            })
            //End of barGraph
            setOptions({
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Weekely Spend',
                    fontColor: 'black',
                    fontFamily: 'Helvetica Neue',
                    fontSize: 28,
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: true,
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            stepSize: 500,
                            max: 3000,
                            fontColor: 'black',
                            fontFamily: 'Helvetica Neue',
                            fontSize: 20,
                        },
                        gridLines: {
                            display: false
                        },
                        labels: {
                            fontColor: 'black',
                            fontFamily: 'Helvetica Neue',
                            fontSize: 20,
                        },
                    }]
                }
            })
        }
    useEffect(() => {
       addBarChart();
    }, [])
    return (
        <div>
            <Bar data={barchart} options={options} height={500} width={700}/>
        </div>
    )
}

export default BarChart
