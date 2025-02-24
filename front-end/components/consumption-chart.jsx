"use client"

import { Line } from "react-chartjs-2"
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
const dados = [
  { "data": "2024-02-01T00:00:00.000Z", "consumo_kwh": 300 },
  { "data": "2024-01-01T00:00:00.000Z", "consumo_kwh": 320 },
  { "data": "2023-12-01T00:00:00.000Z", "consumo_kwh": 310 },
  { "data": "2023-11-01T00:00:00.000Z", "consumo_kwh": 280 },
  { "data": "2023-10-01T00:00:00.000Z", "consumo_kwh": 290 },
  { "data": "2023-09-01T00:00:00.000Z", "consumo_kwh": 270 }
]


const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: false,
      grid: {
        display: true,
        color: "rgba(223, 23, 23, 0.1)",
      },
      ticks: {
        stepSize: 85,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
      borderColor: "#3366FF",
      borderWidth: 2,
    },
    point: {
      radius: 4,
      backgroundColor: "#3366FF",
    },
  },
}

const data = {
  labels: ["Set", "Out", "Nov", "Dez", "jan", "Fev"],
  datasets: [
    {
      data: [325, 310, 330, 290, 305, 320],
      fill: false,
    },
  ],
}

export function ConsumptionChart() {
  return <Line options={options} data={data} height={80} />
}

