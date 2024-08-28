// HorizontalCalendar.jsx

import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import bg2 from '../assets/black.png';
import '../stylrs.css';
function HorizontalCalendar() {
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
        style={isTargetDate(date) ? { color: 'orange' ,fontStyle:'bold',fontWeight:'700'} : {}}
      >
        {date.getDate()}
      </div>
    );
  }

  return (
    <div className="horizontal-calendar">
      <div className="calendar-header">
        <div className="calendar-month">{formatDate(currentDate)}</div>
        <div className="calendar-dates">
          <button className="arrow" onClick={handlePrevClick}>&lt;</button>
          {dates}
          <button className="arrow" onClick={handleNextClick}>&gt;</button>
          <button className="arrow" onClick={handleNextClick}>
            <img src={bg2} alt="Icon" style={{ width: '24px', height: '24px', marginLeft: '15px' }} />
          </button>
          <div className="half-arrow right" onClick={handleNextClick}></div>
          <div className="next-month">
            September 2019
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCalendar;
