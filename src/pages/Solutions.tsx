import React from 'react'
import Page from '../components/Page'
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import Gradient from '../components/Gradient'
import { solutions } from '../config'

export default function Solutions() {
  return (
    <Page title='Løsninger'>
      <Gradient
        title='Våre løsninger'
        subtitle='Vi kombinerer hydrometeorologisk data fra en rekke kilder med maskinlæring for å modellere og generere prognoser for vannføring. Den kombinerte løsningen benytter sanntidsinformasjon til prediksjoner om vannstandsendringer, mer lokalt og raskere enn dagens hydrologiske modeller.'
      />
      <Divider />
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
    </Page>
  )
}
