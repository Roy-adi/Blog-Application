import React from 'react'
import { Grid } from '@mui/material';
import FetchImage from './FetchImage';

export default function Images({meta}) {
  return (
    <Grid container >
     {
        meta.map(image=>(
            <Grid xs={4} item >
              <FetchImage  image={image} />
            </Grid>
            
        ))
     } 

    </Grid>
  )
}
