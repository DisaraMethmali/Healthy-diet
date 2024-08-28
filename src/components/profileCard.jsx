import React from 'react';
import { Card, CardContent, Typography ,Box} from '@mui/material';
import Oval from "../assets/Oval.png";

const ProfileCard = () => {
  return (
    <Card sx={{ marginTop: '-150px' ,mb: 7, width: "325px", height: "406px", background: 'transparent', borderRadius: "20px", boxShadow: 'none' }}>
      <CardContent>
        <img
          src={Oval}
          style={{ width: '107px', height: '107px', marginLeft: '100px', marginTop: '100px' }}
          alt="Profile Picture"
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="325px"
          height="273px"
          sx={{ borderRadius:'30px',marginTop: '-90px',background:'white'}}
        >
          <Typography variant="h6"  sx={{ marginTop: '80px', color: '#121A2D', fontSize: '18px', fontWeight: '500', fontFamily: 'Poppins' }}>Bess Willis</Typography>
          <Typography variant="body2" color="textSecondary"sx={{ marginTop: '0px', color: '#888C96', fontSize: '14px', fontWeight: '300', fontFamily: 'Poppins' }}>24 years, California</Typography>

         
          <Box display="flex" justifyContent="space-between" mb={3} sx={{ marginTop:'20px',color: '#089BAB', fontSize: '14px',fontWeight:'400',fontFamily: 'Poppins' }}>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: 1,marginLeft:'40px' }}>Weight</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 400, lineHeight: '24px', textAlign: 'center', mb: 1,marginLeft:'40px' }}>Height</Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 400, lineHeight: '24px', textAlign: 'left', mb: -1,marginLeft:'60px',marginRight:'40px' }}>Goal</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={3} sx={{ marginTop:'-20px', fontSize: '14px',fontWeight:'400',fontFamily: 'Poppins' }}>
        <Typography
        component="span"
        sx={{
          fontFamily: 'Poppins',
          fontSize: '24px',
          fontWeight: 400,
          lineHeight: '24px',
          textAlign: 'left',
          marginRight: '4px',
          colour:'#121A2D'
           // Add a small margin to separate "50" and "kg"
           // Add a small margin to separate "50" and "kg"
        }}
      >
        60
      </Typography>
      <Typography
        component="span"
        sx={{
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '24px',
          textAlign: 'left',
          marginRight: '24px'
        }}
      >
        kg
      </Typography>
      <Typography
        component="span"
        sx={{
          fontFamily: 'Poppins',
          fontSize: '24px',
          fontWeight: 400,
          lineHeight: '24px',
          textAlign: 'left',
          marginRight: '4px' // Add a small margin to separate "50" and "kg"
        }}
      >
       170
      </Typography>
      <Typography
        component="span"
        sx={{
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '24px',
          textAlign: 'left',
          marginRight: '24px'
        }}
      >
       cm
      </Typography>
      <Typography
        component="span"
        sx={{
          fontFamily: 'Poppins',
          fontSize: '24px',
          fontWeight: 400,
          lineHeight: '24px',
          textAlign: 'left',
          marginRight: '4px',
          color: '#FEAD54' // Add a small margin to separate "50" and "kg"
        }}
      >
        55
      </Typography>
      <Typography
        component="span"
        sx={{
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '24px',
          textAlign: 'left',
            color: '#FEAD54'
        }}
      >
        kg
      </Typography>
        </Box>
        </Box>
      </CardContent>
      
    </Card>
  );
}

export default ProfileCard;
