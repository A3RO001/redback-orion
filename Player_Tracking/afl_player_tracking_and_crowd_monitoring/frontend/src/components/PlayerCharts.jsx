// PlayerGraphs.jsx
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Match 1", "Match 2", "Match 3", "Match 4", "Match 5"];

const metricData = {
  "Fatigue Score": [67, 72, 63, 70, 69],
  "Time On Ground": [82, 79, 85, 80, 84],
  "Distance Covered": [10.8, 11.2, 9.5, 10.1, 10.9],
};

const possessionData = [55, 34, 40, 37, 68];
const barColors = {
  "Fatigue Score": "#dc2626",
  "Time On Ground": "#2563eb",
  "Distance Covered": "#16a34a",
};

const chartOptions = {
  responsive: true,
  plugins: { legend: { position: "top" } },
  scales: { y: { beginAtZero: true } },
};

export const PossessionChart = () => {
  const lineData = {
    labels,
    datasets: [
      {
        label: "Possession (%)",
        data: possessionData,
        fill: false,
        borderColor: "#2563eb",
        tension: 0.3,
      },
    ],
  };
  return <Line data={lineData} options={chartOptions} />;
};

export const MetricsChart = () => {
  const [selectedMetric, setSelectedMetric] = useState("Fatigue Score");

  const barData = {
    labels,
    datasets: [
      {
        label: selectedMetric,
        data: metricData[selectedMetric],
        backgroundColor: barColors[selectedMetric],
        borderRadius: 4,
      },
    ],
  };

  return (
    <div>
      <div className="flex justify-center gap-3 mb-4 flex-wrap">
        {Object.keys(metricData).map((metric) => (
          <button
            key={metric}
            onClick={() => setSelectedMetric(metric)}
            className={`px-3 py-1 border rounded ${
              selectedMetric === metric
                ? "bg-red-600 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {metric}
          </button>
        ))}
      </div>
      <Bar data={barData} options={chartOptions} />
    </div>
  );
};
