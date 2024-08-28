import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const CalorieCounter = () => {
  const percentage = 75; // Percentage to show (3/4 of the circle)
  const radius = 64.5;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
  const strokeDashoffset = circumference / 4; // Adjust this offset as needed
  
  return (
    <Card sx={{ mb: 7,width:"325px" ,height:"351px" ,borderRadius:"20px",boxShadow: 'none' }}>
      <CardContent>
        <Typography variant="h6"  sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: 1 }}>Calorie Counter</Typography>
          
           {/* Left corner text */}
           <Typography variant="body1" sx={{color:'#888C96', fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: 1 }}>
          Eaten
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, lineHeight: '18.75px', textAlign: 'left', mb: 1 }}>
          🍑
        </Typography>
        <Typography variant="body1" sx={{colour:'#121A2D', fontFamily: 'Poppins', fontSize: '20px', fontWeight: 400, lineHeight: '30px', textAlign: 'left', mb: 2 }}>
          1560 kcal
        </Typography>
        <Typography variant="body1" sx={{color:'#888C96', fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: 1 }}>
          Burned
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Roboto', fontSize: '16px', fontWeight: 400, lineHeight: '18.75px', textAlign: 'left', mb: 1 }}>
        🏃☄️
        </Typography>
        <Typography variant="body1" sx={{colour:'#121A2D', fontFamily: 'Poppins', fontSize: '20px', fontWeight: 400, lineHeight: '30px', textAlign: 'left', mb: 2 }}>
          350 kcal
        </Typography>
       
        <Box position="relative" width="139px" height="139px"ml="auto" top="-180px">
          <svg width="100%" height="100%" viewBox="0 0 139 139" top="250px">
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
              320
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
             kcal left
            </text>
          </svg>
           {/* Progress bar */}
          
         
           
          <div
            style={{
              position: 'absolute',
              width: `47px`,
              height: '6px',
              top: '230px',
              right: '240px',
              gap: '0px',
              borderRadius:'10px',
              opacity: '1', // Adjust opacity as needed
              background: '#FF738F',
              
            }}
          />
          {/* Remaining part of the progress bar */}
          <div
            style={{
              position: 'absolute',
              width: `11px`,
              height: '6px',
              top: '230px',
             right: `230px`,
              gap: '0px',
              borderRadius:'10px',
              opacity: '1', // Adjust opacity as needed
              background: '#FFD6DE',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: `47px`,
              height: '6px',
              top: '230px',
              right: '135px',
              gap: '0px',
              borderRadius:'10px',
              opacity: '1', // Adjust opacity as needed
              background: '#738FFF',
              
            }}
          />
          {/* Remaining part of the progress bar */}
          <div
            style={{
              position: 'absolute',
              width: `11px`,
              height: '6px',
              top: '230px',
             right: `124px`,
              gap: '0px',
              borderRadius:'10px',
              opacity: '1', // Adjust opacity as needed
              background: '#D6DEFF',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: `11px`,
              height: '6px',
              top: '230px',
              left: '74px',
              gap: '0px',
              borderRadius:'10px',
              opacity: '1', // Adjust opacity as needed
              background: '#B8EEA4',
              
            }}
          />
          {/* Remaining part of the progress bar */}
          <div
            style={{
              position: 'absolute',
              width: `47px`,
              height: '6px',
              top: '230px',
             right: `10px`,
              gap: '0px',
              borderRadius:'10px',
              opacity: '1', // Adjust opacity as needed
              background: '#DBFCDD',
            }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mb={3} sx={{ marginTop:'-120px',color: '#089BAB', fontSize: '14px',fontWeight:'400',fontFamily: 'Poppins' }}>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: 1,marginLeft:'10px' }}>Carbs</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, lineHeight: '24px', textAlign: 'center', mb: 1, }}>Protein</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: -1,marginLeft:'10px',marginRight:'40px' }}>Fat</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CalorieCounter;
