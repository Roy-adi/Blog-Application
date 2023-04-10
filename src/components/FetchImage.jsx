import React from 'react'
import { Card, styled } from '@mui/material';
const StyledImage = styled('img')({
    height: 300,
    width: '100%',
    objectFit: 'cover'
}
);

export default function FetchImage({image}) {
  return (
    <Card>
       <StyledImage src={image.largeImageURL} alt='img'/>
    </Card>
  )
}
