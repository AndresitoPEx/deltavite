import React from 'react';
import { Button, Grid } from '@mui/material';

const BotonesPasarelas = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Button variant="contained" color="warning">
          MercadoPago
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="success">
          Paypal
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          Visa
        </Button>
      </Grid>
    </Grid>
  );
};

export default BotonesPasarelas;
