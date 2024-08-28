import React, { useState } from "react";
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PersonIcon from "@mui/icons-material/Person"; // Placeholder for Doctor icon
import ContactsIcon from "@mui/icons-material/Contacts";
import TrackerIcon from "@mui/icons-material/TrackChanges"; // Placeholder for Tracker icon
import "../stylrs.css"; // Make sure this path is correct
import bg1 from '../assets/dashboard.png';
import bg2 from '../assets/bggg.png';
import bg3 from '../assets/bgggg4.png';
import bg4 from '../assets/bggg5.png';
function SideBar() {
  const [activeSection, setActiveSection] = useState("tracker");

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const NavigationLink = ({ icon, text, isActive, onClick }) => (
    <Box
      sx={{
        backgroundColor: isActive ? '#fff' : 'transparent',
        borderRadius: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '88px', // Ensure the button is a square
        height: '140px',
        marginBottom: '0px',
      }}
      onClick={onClick}
    >
      <ListItemButton
        selected={isActive}
        className={`nav-btn${isActive ? ' active' : ''}`}
        sx={{
          height:'145px',
          width:'88px',
          borderRadius: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: 0,
        }}
      >
        {icon && <ListItemIcon
          className='nav-btn-icon'
          sx={{
            width: '24px',
            height: '24px',
            color: isActive ? '#089BAB' : '#fff',
          }}
        >{icon}</ListItemIcon>}
        <ListItemText
          className='nav-btn-text'
          primary={text}
          sx={{
            color: isActive ? '#089BAB' : '#fff',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '18px',
            letterSpacing: '0.3000001013278961px',
            fontFamily: 'Poppins',
            width: '70px',
            height: '10px',
          }}
        />
      </ListItemButton>
    </Box>
  );

  return (
    <Box
      className="sidebar"
      sx={{
        position: 'absolute',
        left: 0,
        top: '0px',
        width: '120px',
        height: '1024px',
        gap: '0px',
        borderRadius: '70px 30px 30px 70px',
        opacity: 1, // Set to 1 to make it visible
        background: '#089BAB',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px 10px',
        paddingTop: '281px', // Added padding to start icons from 200px from the top
      }}
    >
      <Box className="navigation-links" sx={{ flexGrow: 1 }}>
        <List>
          <Link to="/dashboard" style={{top:'281px', textDecoration: 'none', color: 'inherit' }}>
            <NavigationLink
              icon={<img src={bg1} alt="Icon" style={{ width: '24px', height: '24px' }} />}
              text={<span style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0.4500001072883606px',marginLeft:'-30px', marginBottom:'66px',textAlign: 'left', color: '#FFFFFF' }}>Dashboard</span>}
              isActive={activeSection === "dashboard"}
              onClick={() => handleNavigation("dashboard")}
            />
          </Link>
          <Link to="/doctor" style={{ textDecoration: 'none', color: 'inherit',fontFamily: 'Poppins',fontSize:'20px' }}>
            <NavigationLink
              icon={<img src={bg4} alt="Icon" style={{ width: '24px', height: '24px' }} />}
              text={<span style={{ fontFamily: 'Poppins', fontSize: '12px', marginBottom:'400px',fontWeight: 400, lineHeight: '24px', letterSpacing: '0.4500001072883606px',marginLeft:'-30px', color: '#FFFFFF' }}>Doctor</span>}
              isActive={activeSection === "doctor"}
              onClick={() => handleNavigation("doctor")}
            />
          </Link>
          <Link to="/contacts" style={{  color: 'inherit', fontFamily: 'Poppins',fontSize:'1px' }}>
            <NavigationLink
              icon= {<img src={bg3} alt="Icon" style={{ width: '24px', height: '24px' }} />}
              text={<span style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0.4500001072883606px',marginLeft:'-30px', color: '#FFFFFF' }}>Contacts</span>}
              isActive={activeSection === "contacts"}
              onClick={() => handleNavigation("contacts")}
            />
          </Link>
          <Link to="/tracker" style={{ textDecoration: 'none', color: 'inherit' }}>
          <NavigationLink
  icon={<img src={bg2} alt="Icon" style={{ width: '24px', height: '24px' ,marginLeft:'15px'}} />}
  text={<span style={{ bottom:'40px',fontFamily: 'Poppins',marginBottom:'227px', fontSize: '12px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0.4500001072883606px',  color: '#089BAB',marginLeft:'-10px', marginBottom: '227px' }}>Tracker</span>}
  
  isActive={activeSection === "tracker"}
  onClick={() => handleNavigation("tracker")}
/>


          </Link>
        </List>
      </Box>
    </Box>
  );
}

export default SideBar;
