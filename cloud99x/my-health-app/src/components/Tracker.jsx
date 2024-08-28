import React from 'react';
import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

const Tracker = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6">Tracker</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Box>
            <Typography variant="body2">Water Intake</Typography>
            <CircularProgress variant="determinate" value={60} size={50} />
          </Box>
          <Box>
            <Typography variant="body2">1250 ml / 2000 ml</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Tracker;
