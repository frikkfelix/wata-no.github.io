import React from 'react'
import { Box, Container, Grid, List, ListItem, Stack, Typography } from '@mui/material'
import { partners } from '../config'

export default function Partners() {
  return (
    <Container sx={{ py: 12 }}>
      <Stack alignItems='center' spacing={2}>
        <Typography variant='h4'>
          Våre partnere
        </Typography>
        <Grid
          container
          alignItems='center'
          spacing={2}
          sx={{
            justifyContent: { xs: 'center', md: 'space-between' }
          }}
        >
          {partners.map(partner => (
            <Grid item>
              <Box
                height={36}
                component='img'
                src={partner.image}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  )
}

