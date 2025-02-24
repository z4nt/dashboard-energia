"use client"

import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const dados = [
  { "data": "2024-02-01T00:00:00.000Z", "consumo_kwh": 300 },
  { "data": "2024-01-01T00:00:00.000Z", "consumo_kwh": 320 },
  { "data": "2023-12-01T00:00:00.000Z", "consumo_kwh": 310 },
  { "data": "2023-11-01T00:00:00.000Z", "consumo_kwh": 280 },
  { "data": "2023-10-01T00:00:00.000Z", "consumo_kwh": 290 },
  { "data": "2023-09-01T00:00:00.000Z", "consumo_kwh": 270 }
]
const dadosfiltrados = dados.map((dado) => dado.consumo_kwh)
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        color: "rgba(0, 0, 0, 0.1)",
      },
      ticks: {
        callback: (value) => `${value}`,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
}

const data = {
  labels: ["Fev", "Jan", "Dez", "Nov", "Out", "Set"],
  datasets: [
    {
      data: dadosfiltrados,
      backgroundColor: "#3366FF",
      borderRadius: 4,
    },
  ],
}

export function CostChart() {
  return <Bar options={options} data={data} height={80} />
}

