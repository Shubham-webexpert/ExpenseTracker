import React from "react";
import "./filterchart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    //   display:false,
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octobar",
  "November",
  "Decembar",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [20, 45, 22, 54, 78, 12, 34, 42, 32, 13, 45, 97],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(87,17,252,255)",
      borderRadius:"50",
    },
  ],
};

const FilterChart = () => {
  return (
    <>
      <div className="verticle">
        <Bar options={options} data={data} className="barchart" />
      </div>
    </>
  );
};

export default FilterChart;
