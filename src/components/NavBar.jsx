import React from 'react'
import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import { Collections } from '@mui/icons-material'

const Header = styled(AppBar)`
background: #445A6F
`

export default function NavBar() {
  return (
    <Header position='static'>
      <Toolbar>
      <Collections />
       <Typography variant='h5' >Image-finder</Typography>
      </Toolbar>
    </Header>
  )
}
