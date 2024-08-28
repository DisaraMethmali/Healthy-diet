import React from 'react';
import { Card, CardContent, Typography, Box,Divider } from '@mui/material';

const PieChart = () => {
  const percentage = 75; // Percentage to show (3/4 of the circle)
  const radius = 64.5;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
  const strokeDashoffset = circumference / 4; // Adjust this offset as needed
  
  return (
    <Card sx={{ mb: 7,width:"325px" ,height:"446px" ,borderRadius:"20px",boxShadow: 'none' }}>
      <CardContent>
        
           {/* Left corner text */}
           <Typography variant="body1" sx={{color:'#888C96', fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: 1 }}>
           Walked 🐾
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, lineHeight: '18.75px', textAlign: 'left', mb: 1 }}>
        
        </Typography>
        <Typography variant="body1" sx={{colour:'#121A2D', fontFamily: 'Poppins', fontSize: '20px', fontWeight: 400, lineHeight: '30px', textAlign: 'left', mb: 2 }}>
         4532 steps
        </Typography>
        <Typography variant="body1" sx={{color:'#888C96', fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: 1 }}>
        My Goal 🎗
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, lineHeight: '18.75px', textAlign: 'left', mb: 1 }}>
        
        </Typography>
        <Typography variant="body1" sx={{colour:'#121A2D', fontFamily: 'Poppins', fontSize: '20px', fontWeight: 400, lineHeight: '30px', textAlign: 'left', mb: 2 }}>
         6500 steps
        </Typography>
      
        <Divider sx={{ borderColor: 'grey.400', my: 2 }} />

        <Box position="relative" width="139px" height="139px"ml="auto" top="-160px">
          <svg width="100%" height="100%" viewBox="0 0 139 139" top="450px">
            {/* Outer circle with blue and light blue segments */}
            <circle
              cx="69.5"
              cy="69.5"
              r="64.5"
              fill="transparent"
              stroke="#16C0C0"
              strokeWidth="8"
              strokeDasharray={`${(75 / 100) * circumference} ${circumference}`}
              transform="rotate(-90 69.5 69.5)"
              strokeLinecap="round"
            />
            {/* Light blue segment */}
            <circle
              cx="69.5"
              cy="69.5"
              r="64.5"
              fill="transparent"
              stroke="#CEEBEE"
              strokeWidth="3"
              strokeDasharray={`${(25 / 100) * circumference} ${circumference}`}
              strokeDashoffset={circumference * 0.75} // 75% of circumference for light blue segment
              transform="rotate(0 69.5 69.5)" // Position light blue segment on the right side
              strokeLinecap="round"
            />
            {/* Oval shapes */}
          
             <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="Poppins"
              fontSize="28px"
              fontWeight="400"
              fill="#089BAB"
              
            >
            4532
            </text>
            <text
              x="50%"
              y="64%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="Poppins"
              fontSize="12px"
              fontWeight="300"
              fill="#888C96"
              
            >
            left
            </text>
          </svg>
          <svg width="100%" height="100%" viewBox="0 0 139 139" top="1050px">
            {/* Outer circle with blue and light blue segments */}
            <circle
              cx="69.5"
              cy="69.5"
              r="64.5"
              fill="transparent"
              stroke="#FEAD54"
              strokeWidth="8"
              strokeDasharray={`${(75 / 100) * circumference} ${circumference}`}
              transform="rotate(-90 69.5 69.5)"
              strokeLinecap="round"
            />
            {/* Light blue segment */}
            <circle
              cx="69.5"
              cy="69.5"
              r="64.5"
              fill="transparent"
              stroke="#F87D57"
              strokeWidth="3"
              strokeDasharray={`${(25 / 100) * circumference} ${circumference}`}
              strokeDashoffset={circumference * 0.75} // 75% of circumference for light blue segment
              transform="rotate(0 69.5 69.5)" // Position light blue segment on the right side
              strokeLinecap="round"
            />
            {/* Oval shapes */}
          
             <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="Poppins"
              fontSize="28px"
              fontWeight="400"
              fill="#FEAB54"
              
            >
           325
            </text>
            <text
              x="50%"
              y="64%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="Poppins"
              fontSize="12px"
              fontWeight="300"
              fill="#888C96"
              
            >
            left
            </text>
          </svg>
           {/* Progress bar */}
          
         
           
         
          {/* Remaining part of the progress bar */}
          
          
          {/* Remaining part of the progress bar */}
          
       
          {/* Remaining part of the progress bar */}
         
        </Box>
       
      </CardContent>
    </Card>
  );
}

export default PieChart;
