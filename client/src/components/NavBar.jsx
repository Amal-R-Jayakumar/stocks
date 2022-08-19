import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'

function NavBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundImage: "linear-gradient(#ffffff, #e0f2ff)" }} elevation={0}>
          <Toolbar>
            <Container>

              <Typography variant="h5" fontWeight={600} component="div" sx={{ flexGrow: 1 }} color="#000000" >
                Stocks
              </Typography>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default NavBar