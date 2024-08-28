import React from 'react';
import { CssBaseline, Container, Box, Typography,Button ,Card} from '@mui/material';
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
import bg8 from '../assets/bg8.png'
import logo from '../assets/selected.png';
import logo1 from '../assets/unselected.png';
import logo2 from '../assets/unselecte.png';
import img from '../assets/Path 4.png';
function Home() {
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
          <CalorieCounter/>
          <DrunkBox/>

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
              top: '50px', // Positioning the blue box 100px from the top
              
            }}
          >
            <Typography variant="h6" sx={{ textAlign: 'center', fontFamily: 'Poppins', fontSize: '20px', fontWeight: 400, lineHeight: '30px', textAlign: 'left' }}>
              Great Job! Your water level is on top!
            </Typography>
            <img component="img" src={bg} style={{ width: '77px', height: '77px' }} />
            
          </Box>
         
          <Box display="flex" flexDirection="column" width="800px" sx={{ mb: 4, pr: 2, position: 'relative', top: '180px' }}>
          <HorizontalCalendar/>
          <Box display="flex" justifyContent="space-between" mb={3} sx={{ marginTop:'20px',color: '#121A2D', fontSize: '14px',fontWeight:'400',fontFamily: 'Poppins' }}>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '22px', fontWeight: 300, lineHeight: '24px', textAlign: 'left', mb: 1,marginLeft:'40px' }}>Breakfast</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '22px', fontWeight: 300, lineHeight: '24px', textAlign: 'center', mb: 1,marginLeft:'0px' }}>Lunch</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '22px', fontWeight: 300, lineHeight: '24px', textAlign: 'left', mb: -1,marginLeft:'20px',marginRight:'140px' }}>Dinner</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={3} sx={{ marginTop:'-10px',color: '#888C96', fontSize: '14px',fontWeight:'400',fontFamily: 'Poppins' }}>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: 1,marginLeft:'40px' }}>Eaten</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'center', mb: 1,marginLeft:'40px' }}>Eaten</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: -1,marginLeft:'40px',marginRight:'80px' }}>Recommended</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={3} sx={{ marginTop:'-30px',color: '#121A2D', fontSize: '14px',fontWeight:'400',fontFamily: 'Poppins' }}>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: 1,marginLeft:'40px' }}>395kcal</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'center', mb: 1,marginLeft:'40px' }}>567kcal</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: -1,marginLeft:'40px',marginRight:'140px' }}>300kcal</Typography>
        </Box>
        <Button
              variant="contained"
              size="small"
              sx={{
               
                left:'-550px',
                width: '48px',
                height: '48px',
                backgroundColor: '#089BAB33',
                color: '#089BAB',
                minWidth: '48px',
                minHeight: '48px',
                padding: '0',
                borderRadius: '15px',
                alignSelf: 'flex-end', // Align button to the right
                marginTop: '-90px',
                fontSize: '24px',
              }}
            >
              {<img src={bg8} alt="Icon" style={{ width: '24px', height: '24px' }} />}
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                top:'20px',
                width: '48px',
                left:'-250px',
                height: '48px',
                backgroundColor: '#089BAB33',
                color: '#089BAB',
                minWidth: '48px',
                minHeight: '48px',
                padding: '0',
                borderRadius: '15px',
                alignSelf: 'flex-end', // Align button to the right
                marginTop: '-70px',
                fontSize: '24px',
              }}
            >
{<img src={bg8} alt="Icon" style={{ width: '24px', height: '24px' }} />}
            </Button>
        <Button
              variant="contained"
              size="small"
              sx={{
                top:'40px',
                width: '48px',
                height: '48px',
                backgroundColor: '#FEAD54',
                color: 'white',
                minWidth: '48px',
                minHeight: '48px',
                padding: '0',
                borderRadius: '15px',
                alignSelf: 'flex-end', // Align button to the right
                marginTop: '-70px',
                fontSize: '24px',
              }}
            >
              +
            </Button>
            <Box
  display="flex"
  flexDirection="column"
  width="800px"
  sx={{
    mb: 4,
    pr: 2,
    position: 'relative',
    top: '100px',
    overflowX: 'auto',
    maxWidth: '1000px',  // Adjust this value as needed
  }}
>
<Typography sx={{marginRight:'140px',color:'#089BAB', fontFamily: 'Poppins', fontSize: '28px', fontWeight: 400, lineHeight: '42px', letterSpacing: '0.7px', textAlign: 'left', mb: 2 }}>
                Healthy Dishes
              </Typography>
              <Box display="flex" justifyContent="space-between" mb={3}>
                <Button
                  variant="contained"
                  sx={{
                    top:'-55px',
                    width: '79px',
                    height: '48px',
                    backgroundColor: '#089BAB33',
                    fontFamily: 'Poppins',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    textAlign: 'center',
                    borderRadius: '15px',
                    color: '#089BAB',
                    textTransform: 'none' ,
                    marginLeft: '350px',
                    marginRight:'20px' // Ensuring the text is in simple letters
                  }}
                >
                 Breakfast
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    top:'-55px',
                    width: '79px',
                    height: '48px',
                    backgroundColor: '#089BAB33',
                    color: '#089BAB',
                    fontFamily: 'Poppins',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    textAlign: 'center',
                    borderRadius: '20px',
                    textTransform: 'none' ,
                    marginRight: '0px', // Ensuring the text is in simple letters
                  }}
                >
                 Lunch
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    top:'-55px',
                    width: '79px',
                    height: '48px',
                    backgroundColor: '#089BAB33',
                    color: '#089BAB',
                    fontFamily: 'Poppins',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    textAlign: 'center',
                    borderRadius: '20px',
                    textTransform: 'none',
                   
                    marginLeft: '20px', // Ensuring the text is in simple letters
                  }}
                >
                 Snack
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    top:'-55px',
                    width: '79px',
                    height: '48px',
                    backgroundColor: '#089BAB',
                    color: '#089BAB333',
                    fontFamily: 'Poppins',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    textAlign: 'center',
                    borderRadius: '20px',
                    textTransform: 'none',
                  
                    marginLeft: '20px', // Ensuring the text is in simple letters
                  }}
                >
                  Dinner
                </Button>
              </Box>
             

    

 <HealthyDishes /></Box>
 
 <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        top: '710px',
        left: '60px',
        gap: '16px', // Space between items inside the card
        background: 'white', 
        boxShadow:'none',// Set card background to transparent
        border: 'none', // Remove any border
      }}
    >
  <img src={logo} alt="Image 1" style={{ width: '124px', height: '48px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }} />
  <img src={logo1} alt="Image 2" style={{ width: '124px', height: '48px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }} />
  <img src={logo2} alt="Image 3" style={{ width: '124px', height: '48px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }} />
  <Typography sx={{marginRight:'70px',color:'#FEAD54', fontFamily: 'Poppins', fontSize: '22px', fontWeight: 600, lineHeight: '42px', letterSpacing: '0.7px', textAlign: 'left', mb: 2 }}>
                Order Food
              </Typography>
              <Button
              variant="contained"
              size="small"
              sx={{
                top:'-10px',
                width: '48px',
                left:'-40px',
                height: '48px',
                backgroundColor: '#FEAD54',
                color: 'white',
                minWidth: '48px',
                minHeight: '48px',
                padding: '0',
                borderRadius: '15px',
                alignSelf: 'flex-end', // Align button to the right
                marginTop: '-70px',
                fontSize: '24px',
              }}
            >
{<img src={img} alt="Icon" style={{ width: '12px', height: '12px' }} />}
            </Button>
</Card>


          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
