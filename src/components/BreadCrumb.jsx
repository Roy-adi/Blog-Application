import React from 'react'
import { Box, InputBase , styled } from '@mui/material'
const Component = styled(Box)`
    background: #F6F6F6;
    & > div {
        margin: 10px;
    }
`;

export default function BreadCrumb({setText, setCount}) {
  return (
      <Component>
         <InputBase 
         placeholder='Search images'
        onChange={(e)=> setText(e.target.value)}
         />
         <InputBase 
         placeholder='Number of images'
         onChange={(e)=> setCount(e.target.value)}
         type="number"
         />
      </Component>
  )
}
