import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const DrunkBox = () => {
    const percentage = 75; // Percentage to show (3/4 of the circle)
    const radius = 64.5;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
    const strokeDashoffset = circumference / 4; // Adjust this offset as needed
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '325px',
        height: '110px',
        top: '780px',
        right: '48px',
        gap: '0px',
        opacity: '0px',
        backgroundColor: '#FFFFFF',
        borderRadius: '30px',
        padding: '16px',
        textAlign: 'left',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        color: '##888C96', // text color
      }}
    >
       <Typography variant="body1" sx={{color:'#888C96', fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: 1 }}>
          Drunk 🐳
        </Typography>
        
        <Typography variant="body1" sx={{ color: '#121A2D', fontFamily: 'Poppins', fontSize: '20px', fontWeight: 400, lineHeight: '30px', textAlign: 'left', mb: 2 }}>
      <span style={{ color: '#000000' }}>1250ml</span><span style={{ color: '#888888' }}>/2000ml</span>
    </Typography>
      <Box position="relative" width="78px" height="78px"ml="auto" top="-80px">
          <svg width="100%" height="100%" viewBox="0 0 139 139" top="250px">
            {/* Outer circle with blue and light blue segments */}
            <circle
              cx="69.5"
              cy="69.5"
              r="64.5"
              fill="transparent"
              stroke="#16C0C0"
              strokeWidth="12"
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
            <circle
              cx="69.5"
              cy="6"
              r="4"
              fill="#16C0C0"
              transform="rotate(-5 80 70)"
              style={{
                animation: 'rotateAnimationReverse 2s linear infinite',
              }}
            />
            <circle
              cx="69.5"
              cy="133"
              r="4"
              fill="transparent"
              stroke="#16C0C0"
              strokeWidth="2"
              transform="rotate(92 69.5 69.5)"
            />
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
              750
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
           ml left
            </text>
          </svg>
    </Box>
    </Box>
  );
}

export default DrunkBox;
