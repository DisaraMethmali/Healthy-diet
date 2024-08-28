import React from 'react';
import { CssBaseline,Divider, Container, Box, Typography, Button, Card, CardContent } from '@mui/material';
import ProfileCard from '../components/profileCard';

import Progress from '../components/Progress';
import Meals from '../components/Meals';
import CalorieCounter from '../components/CalorieCounter';
import HealthyDishes from '../components/HealthyDishes';
import Tracker from '../components/Tracker';
import bg from '../assets/bg.png';
import SideBar from '../components/SideBar';
import HorizontalCalendar from '../components/HorizontalCalendar';
import DrunkBox from '../components/Drunk';
import bgg from '../assets/bggg.png'
import logo from '../assets/selected.png';
import logo1 from '../assets/unselected.png';
import logo2 from '../assets/unselecte.png';
import img from '../assets/Path 4.png';
import Chart from '../components/Chart';
import PieChart from '../components/PieChart';
import LineGraph from '../components/LineGraph';
import { useState } from 'react'
import '../styles.css';
const TrackerPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2019, 7, 26)); // August 26, 2019

  const handlePrevClick = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7));
  };

  const handleNextClick = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7));
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isTargetDate = (date) => {
    return date.getDate() === 26 && date.getMonth() === 7 && date.getFullYear() === 2019;
  };

  // Generate dates for the week
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i);
    dates.push(
      <div
        key={i}
        className={`calendar-date ${isToday(date) ? 'today' : ''}`}
        style={isTargetDate(date) ? { color: 'orange', fontWeight: '700' } : {}}
      >
        {date.getDate()}
      </div>
    );
  }
  const trainingData = [
    {
      name: "TRX Cardio",
      burned: "350 kcal",
      time: "1h 45m",
    },
    {
      name: "Stretching",
      burned: "180 kcal",
      time: "30m",
    },
  ];

  return (
    <Container sx={{ maxWidth: '1900px !important', bgcolor: '#EFF7F8', maxHeight: '1024px',overflow: 'hidden', }}>
      <CssBaseline />
      <Box display="flex" justifyContent="space-between">
        {/* Left Sidebar */}
        <SideBar />
        
        {/* Left Content */}
        <Box display="flex" flexDirection="column" height="2500px" width="370px" sx={{ ml: '130px', mb: 5, pr: 2, position: 'relative', top: '100px' }}>
          <ProfileCard />
          <Box display="flex" justifyContent="space-between" alignItems="center" width="370px">
            <Button
              variant=""
              sx={{
                width: '118px',
                height: '48px',
                backgroundColor: '#089BAB',
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                letterSpacing: '0.4px',
                textAlign: 'center',
                borderRadius:'20px',
                marginLeft: '36px',
                top:'-40px',color: 'white',
                textTransform: 'none'
                
              }}
            >
              Meal
            </Button>
            <Button
              variant="contained"
              sx={{
                width: '118px',
                height: '48px',
                backgroundColor: '#089BAB33',
                color: '#089BAB',
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                letterSpacing: '0.4px',
                textAlign: 'center',
                borderRadius:'20px',
                marginRight: '70px',
                top:'-40px'
                ,textTransform: 'none'
              }}
            >
              Exercises
            </Button>
          </Box>
          <Typography sx={{marginTop:'-40px', fontFamily: 'Poppins', fontSize: '18px', fontWeight: 400, lineHeight: '27px', letterSpacing: '0.45px', textAlign: 'left', color: '#089BAB',  p: 2, mb: 2 }}>
                Progress
              </Typography>
              <Typography sx={{marginTop:'-70px', fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '27px', letterSpacing: '0.45px', textAlign: 'right',  color: '#888C96', p: 2, mb: 2 }}>
              26 Aug 2019
              </Typography>
          <PieChart/>
         
        </Box>

        {/* Main Content */}
        <Box display="flex" flexDirection="column" width="801px !important" height="1020px" sx={{ mb: 6, pl: 2, backgroundColor: '#fff', borderRadius: '50px 0 0 50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' ,ml:'10'}}>
          <Box
            p={2}
            sx={{
              background: `linear-gradient(90deg, #16C0C0 0%, #089BAB 100%)`,
              color: '#fff',
              borderRadius: '30px',
              width: '757px',
              height: '97px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 24px',
              position: 'absolute',
              alignItems: 'center',
              top: '50px', // Positioning the blue box 100px from the top
              
            }}
          >
             <Typography
      variant="h6"
      sx={{
        fontFamily: 'Poppins',
        fontSize: '20px',
        lineHeight: '30px',
        textAlign: 'right',
      }}
    >
      <span style={{ fontWeight: 500 }}>Advice!</span> <span style={{ fontWeight: 400 }}>Connect your Apple Watch for better results.</span>
    </Typography>
            
            <img component="img" src={bg} style={{ width: '77px', height: '77px' }} />
            
          </Box>
         
          <Box display="flex" flexDirection="column" width="1200px" sx={{ mb: 4, pr: 2, position: 'relative', top: '170px' ,justifyContent:'space-between'}}>
          <Typography sx={{color:'#089BAB', fontFamily: 'Poppins', fontSize: '28px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: -1,marginLeft:'240px',marginRight:'140px' }}>Popular Training</Typography>
          <Box display="flex" justifyContent="space-between" mb={3} sx={{ marginTop:'40px',color: '#121A2D', fontSize: '14px',fontWeight:'400',fontFamily: 'Poppins' }}>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '20px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: 1,marginLeft:'320px' }}>Power Training</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '20px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: 1,marginRight:'20px' }}>Yoga Training</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '20px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: -1,marginRight:'240px' }}>Stretching</Typography>
        </Box>
       
        <Box display="flex" justifyContent="space-between" mb={3} sx={{ marginTop:'-30px',color: '#121A2D', fontSize: '14px',fontWeight:'400',fontFamily: 'Poppins' }}>
          <Typography sx={{ color:'#888C96',fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: 1,marginLeft:'320px' }}>395 kcal / h</Typography>
          <Typography sx={{ color:'#888C96',fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'center', mb: 1,marginLeft:'-10px' }}>395 kcal / h</Typography>
          <Typography sx={{ color:'#888C96',fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: -1,marginRight:'240px' }}>395 kcal / h</Typography>
        </Box>
        <Button
              variant="contained"
              size="small"
              sx={{
               
                left:'-870px',
                width: '80px',
                height: '80px',
                backgroundColor: '#FFFFFF',
                color: '#089BAB',
                minWidth: '48px',
                minHeight: '48px',
                padding: '0',
                borderRadius: '25px',
                alignSelf: 'flex-end', // Align button to the right
                marginTop: '-90px',
                fontSize: '24px',
              }}
            >
            🦍
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                top:'-10px',
                width: '80px',
                left:'-620px',
                height: '80px',
                backgroundColor: '#FFFFFF',
                color: '#089BAB',
                minWidth: '48px',
                minHeight: '48px',
                padding: '0',
                borderRadius: '25px',
                alignSelf: 'flex-end', // Align button to the right
                marginTop: '-70px',
                fontSize: '24px',
              }}
            >
🐍
            </Button>
        <Button
              variant="contained"
              size="small"
              sx={{
                top:'-20px',
                width: '80px',
                height: '80px',
                left:'-350px',
                backgroundColor: '#FFFFFF',
                color: 'white',
                minWidth: '48px',
                minHeight: '48px',
                padding: '0',
                borderRadius: '25px',
                alignSelf: 'flex-end', // Align button to the right
                marginTop: '-70px',
                fontSize: '24px',
              }}
            >
              🐌
            </Button>


            <Typography sx={{marginTop:'50px',color:'#089BAB', fontFamily: 'Poppins', fontSize: '28px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: -1,marginLeft:'240px',marginRight:'140px' }}>Activity Statistic</Typography>
            <Box display="flex" flexDirection="column" width="50px" sx={{ mb: 4, pr: 2, position: 'relative', top: '20px', justifyContent: 'space-between', marginLeft: '240px' }}>
  <div className="horizontal-calendar">
    <div className="calendar-header">
      <div className="calendar-months">
        <div className="calendar-month left-month">{formatDate(currentDate)}</div>
        <div className="calendar-month right-month">September 2019</div>
      </div>
      <div className="calendar-dates">
        <button className="arrow" onClick={handlePrevClick}>&lt;</button>
        {dates}
        <button className="arrow" onClick={handleNextClick}>&gt;</button>
      </div>
    </div>
  </div>
  <LineGraph/>
</Box>
<Box display="flex" justifyContent="space-between">
<Typography sx={{marginTop:'-200px',color:'#089BAB', fontFamily: 'Poppins', fontSize: '28px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: -1,marginLeft:'740px',marginRight:'0px' }}>My Training</Typography>
<Button
              variant="contained"
              size="small"
              sx={{
                width: '48px',
                height: '48px',
                backgroundColor: '#089BAB33',
                color: '#089BAB',
                minWidth: '48px',
                minHeight: '48px',
                padding: '0',
                borderRadius: '15px',
                alignSelf: 'flex-end', // Align button to the right
                fontSize: '24px',
                left:'-210px',
                top:'-220px'

              }}
            >
              +
            </Button>
            </Box>
            <Box display="flex" flexDirection="column" width="250px" sx={{ boxShadow: 'none',mb: 4, pr: 2, position: 'relative', top: '-200px', justifyContent: 'space-between', marginLeft: '740px' }}>
            {trainingData.map((training, index) => (
              <Card key={index} sx={{boxShadow: 'none', width: '100%', mb: 2 }}>
                <CardContent>
                <Box display="flex" justifyContent="space-between">
                <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAlign: 'left',
                        color:'#888C96'
                      }}
                    >
                      Training
                    </Typography>
                <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Poppins',
                      fontSize: '16px',
                      fontWeight: 400,
                      textAlign: 'right',
                      display: 'inline-block',
                      width: '50%',
                     
                      
                    }}
                  >
                    {training.name}
                  </Typography>
                  </Box>
                  <Divider sx={{ borderColor: 'grey.400', my: 2 }} />

                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAlign: 'left',
                         color:'#888C96'
                      }}
                    >
                      Burned
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAlign: 'right',
                      }}
                    >
                      {training.burned}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAlign: 'left',
                         color:'#888C96'
                      }}
                    >
                      Time:
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAlign: 'right',
                      }}
                    >
                      {training.time}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
</Box>

 <Box display="flex" justifyContent="space-between">
 <Typography sx={{marginTop:'-200px',color:'#089BAB', fontFamily: 'Poppins', fontSize: '28px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: -1,marginLeft:'240px',marginRight:'0px' }}>Heart Rate</Typography>


 <Button
              variant="contained"
              size="small"
              sx={{
                top:'-100px',
                width: '48px',
                left:'-700px',
                height: '48px',
                backgroundColor: '#CEEBEE',
                minWidth: '48px',
                minHeight: '48px',
                padding: '0',
                borderRadius: '15px',
                alignSelf: 'flex-end', // Align button to the right
                marginTop: '-50px',
                fontSize: '24px',
              }}
            >
{<img src={bgg} alt="Icon" style={{ width: '12px', height: '12px' }} />}
            </Button>
 </Box>
 <Box display="flex" justifyContent="space-between">
 <Typography sx={{marginTop:'-200px',color:'#089BAB', fontFamily: 'Poppins', fontSize: '28px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: -1,marginLeft:'740px',marginRight:'0px' }}>Water Balance</Typography>
 </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default TrackerPage;
