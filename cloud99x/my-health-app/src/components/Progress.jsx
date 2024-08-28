import React from 'react';
import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

const Progress = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6">Progress</Typography>
        <Typography variant="body2">26 Aug 2019</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <CircularProgress variant="determinate" value={50} />
          <Box ml={2}>
            <Typography variant="body2">Calories Left: 320 kcal</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Progress;
