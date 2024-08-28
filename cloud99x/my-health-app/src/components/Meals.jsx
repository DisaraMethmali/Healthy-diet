import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Button } from '@mui/material';

const Meals = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6">Meals</Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="body2">Breakfast</Typography>
              <Typography variant="body2">395 kcal</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="body2">Lunch</Typography>
              <Typography variant="body2">567 kcal</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="body2">Dinner</Typography>
              <Typography variant="body2">300 kcal</Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Meals;
