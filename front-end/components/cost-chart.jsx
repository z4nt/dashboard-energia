"use client"

import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { useEffect, useState } from "react"
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

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


export function CostChart() {
  const [dadosFiltrados, setDadosFiltrados] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3001/api/consumos/${2}`)
      .then((res) => res.json())
      .then((data) => {
        const dados = data.map((dado) => dado.consumo_kwh).slice(0, 6)
        
        setDadosFiltrados(dados)
        
      })
  }, [])
 console.log(dadosFiltrados)
  const data = {
    labels: ["Fev", "Jan", "Dez", "Nov", "Out", "Set"],
    datasets: [
      {
        data: dadosFiltrados,
        backgroundColor: "#3366FF",
        borderRadius: 4,
      },
    ],
  }
  return <Bar options={options} data={data} height={80} />
}

