import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineGraph = () => {
  // Create the gradient fill inside the chart component
  const createGradient = (ctx, area) => {
    const gradient = ctx.createLinearGradient(0, area.bottom, 2, area.top);
    gradient.addColorStop(0, 'rgba(248, 252, 252, 0.0001)');
    gradient.addColorStop(1, '#37C5D5');
    return gradient;
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: true,
          color: "#24645C1A", // Grid color
          borderDash: [5, 0], // Dashed lines
          drawBorder: false, // Hide the border line
          drawOnChartArea: true, // Draw grid lines on chart area
          z: 1, // Ensure grid lines are on top
        },
        ticks: {
          color: "#888C96",
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          display: false,
          color: "#24645C1A", // Grid color
          borderDash: [5, 0], // Dashed lines
          drawBorder: false, // Hide the border line
          drawOnChartArea: false, // Draw grid lines on chart area
          z: 1, // Ensure grid lines are on top
        },
        ticks: {
          color: "#FFFFFF",
          stepSize: 20,
        },
        min: 0,
        max: 70,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  const data = {
    labels: ["","26", "27", "28", "29", "30", "01",""],
    datasets: [
      {
        label: "Average",
        data: [0, 50, 30, 60, 40, 15, 20],
        borderColor: "#089BAB",
        backgroundColor: (context) => {
          const chart = context.chart;
          const {ctx, chartArea} = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }

          return createGradient(ctx, chartArea);
        },
        fill: true, // Fill under the line
        tension: 0.4,
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "429px",
        height: "187px",
        border: "3px solid",
        borderImageSource: "linear-gradient(179.05deg, #13CBD5 -30.68%, #089BAB 81.11%)",
        borderRadius: '8px',
        position: "absolute",
        top: "130.75px",
        left: "4px",
        padding: "16px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
      }}
    >
      
      
      <Box
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
};

export default LineGraph;
