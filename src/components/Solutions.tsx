import React from 'react'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { solutions } from '../config'
import Gradient from './Gradient'

export default function Solutions() {
  return (
    <Box id="solutions" sx={{ backgroundColor: '#FFFFFF' }}>
      <Gradient title='Våre løsninger' height='20vh'/>
      <Container sx={{ pb: 5 }}>
        <Grid container spacing={10} sx={{ my: 4 }} alignItems='center'>
          {solutions.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <>
                <Grid item xs={12} md={5} order={isEven ? index + 1: index}>
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'flex' },
                    }}
                  >
                    <Box
                      maxWidth='100%'
                      maxHeight='100%'
                      component='img'
                      src={item.illustration}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={7} order={isEven ? index : index + 1}>
                  <Stack spacing={1}>
                    <Typography variant='h4'>
                      {item.title}
                    </Typography>
                    <Typography variant="body1">
                      {item.description}
                    </Typography>
                  </Stack>
                </Grid>
              </>)
          })}
        </Grid>
      </Container>
    </Box>
  )
}
