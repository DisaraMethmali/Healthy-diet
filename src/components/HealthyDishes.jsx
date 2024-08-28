import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import bg from '../assets/food ph.png';
import bg1 from '../assets/Bitmap.png';
import bg2 from '../assets/bg2.png';
const dishData = [
  {
    name: "Crispy Zucchini Fritters",
    kcal: "356 kcal",
    imgSrc: bg1,
  },
  {
    imgSrc: bg,
    name: "Pumpkin Puree",
    kcal: "370 kcal",
  },
  {
    name: "Pineapple Guacamole",
    kcal: "409 kcal",
    imgSrc: bg2,
  },
  {
    name: "Thai Salad",
    kcal: "278 kcal",
    imgSrc: bg,
  },
  {
    name: "Another Dish",
    kcal: "300 kcal",
    imgSrc: bg,
  },
];

const HealthyDishes = () => {
  const handleWheel = (event) => {
    event.preventDefault();
    const container = event.currentTarget;
    container.scrollLeft += event.deltaY;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        gap: '20px',
        padding: '20px 0',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        marginTop: '0px',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        whiteSpace: 'nowrap',
      }}
      onWheel={handleWheel}
    >
      {dishData.map((dish, index) => (
        <Card
          key={index}
          sx={{
            minWidth: '214px',
            maxWidth: '214px',
            height: '262px',
            flexShrink: 0,
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0px 42px 44px 0px #78928D1F', // Box shadow style
            padding: '16px',
            textAlign: 'center',
            overflow: 'visible',
            position: 'relative',
            ml: index === 0 ? '50px' : '0px',
          }}
        >
          <Box
            component="img"
            src={dish.imgSrc}
            alt={dish.name}
            sx={{
              width: '136px',
              height: '136px',
              borderRadius: '100%',
              position: 'absolute',
              top: '-20px', // Adjusted to ensure full visibility
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
          <CardContent
            sx={{
              paddingTop: '80px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                marginBottom: '8px', 
                display: '-webkit-box',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                fontSize: '18px',
                textOverflow: 'ellipsis',
                fontWeight: 300,
                marginTop: '30px',
                fontFamily: 'Poppins',
                textAlign: 'left',
                lineHeight: '24px',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2, // Allow for two lines of text
              }}
            >
              {dish.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                whiteSpace: 'nowrap',
                position: 'relative',
                fontSize: '18px',
                fontWeight: 400,
                marginBottom: '-100px',
                fontFamily: 'Poppins',
                textAlign: 'left',
              }}
            >
              {dish.kcal}
            </Typography>
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
                marginTop: '-10px',
                fontSize: '24px',
              }}
            >
              +
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default HealthyDishes;
