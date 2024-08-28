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

const Chart = () => {
  

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
          color: "#FFFFFFF", // Grid color
          borderDash: [0, 0], // Dashed lines
          drawBorder: false, // Hide the border line
          drawOnChartArea: false, // Draw grid lines on chart area
          z: 0, // Ensure grid lines are on top
        },
        ticks: {
          color: "#FFFFFF",
          stepSize: -50,
        },
        min: -50,
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
    labels: ["2016", "", "2017", "", "2018", "", "2019"],
    datasets: [
        {
            label: "Average",
            data: [0, -10, 50, 25, -20, -45, 20],
            borderColor: "#089BAB",
            backgroundColor: "rgba(8, 155, 171, 0.5)", // Semi-transparent dark blue
            fill: false, // Fill under the line
            tension: 0.4,
            pointBackgroundColor: "transparent",
            pointBorderColor: "transparent",
          },
      {
        label: "My Data",
        data: [15, 60, 20, 60, 50, 10, 35],
        borderColor: "#E6F5F6",
        backgroundColor: "#E6F5F6", // Semi-transparent light blue
        fill: true, // Fill under the line
        tension: 0.4,
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
      },
      {
        label: "Average",
        data: [-20, -15, -50, -15, -40, -15, -40],
        borderColor: "#E6F5F6",
        backgroundColor: "#E6F5F6", // Semi-transparent light blue
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
        width: "737px",
        height: "190.25px",
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
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "22px",
          fontWeight: 600,
          lineHeight: "42px",
          letterSpacing: "0.7px",
          textAlign: "left",
          color: "#089BAB",
          mb: 2,
        }}
      >
        Health Curve
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 2,
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "#089BAB",
            borderColor: "#089BAB",
            borderRadius: "20px",
            height: "24px",
            minWidth: "24px",
          }}
        >
          D
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#089BAB",
            borderColor: "#089BAB",
            borderRadius: "20px",
            height: "24px",
            minWidth: "24px",
          }}
        >
          W
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#089BAB",
            borderColor: "#089BAB",
            borderRadius: "20px",
            height: "24px",
            minWidth: "24px",
          }}
        >
          M
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#089BAB",
            borderColor: "#089BAB",
            borderRadius: "20px",
            height: "24px",
            minWidth: "24px",
          }}
        >
          Y
        </Button>
      </Box>
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

export default Chart;
