import React from 'react'
import Page from '../components/Page'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { AiOutlineArrowRight } from 'react-icons/all'
import { Link } from 'react-router-dom'
import Partners from '../components/Partners'


export default function Home() {
  return (
    <Page title="wata.no">
      <Box
        sx={{
          width: '100%',
          height: 'calc(100vh - 120px)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            zIndex: 9,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(water-image.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <Container>
          <Stack
            spacing={3}
            sx={{
              zIndex: 10,
              position: 'relative',
            }}
          >
            <Typography
              variant="h2"
              sx={{ color: 'common.white' }}
            >
              Making sense of water <br />for a sustainable future.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: 'common.white' }}
            >
              Wata kombinerer sensorteknologi og maskinlæring for å
              forutse og varsle <br/> om flomhendelser, <strong>raskere og mer nøyaktig</strong> enn dagens modeller
            </Typography>
            <Button
              variant='contained'
              size="large"
              sx={{ borderRadius: '24px', width: '164px' }}
              endIcon={ <AiOutlineArrowRight /> }
              to={'/contact'}
              component={Link}
            >
              Be om demo
            </Button>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Partners />
        <Box sx={{ backgroundColor: '#FFFFFF', py: 12}}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <Stack spacing={4}>
                  <Stack direction='row' spacing={2} alignItems='center'>
                    <Box
                      component='img'
                      src='chevron.svg'
                      height='1.5em'
                    />
                    <Typography variant='h5' sx={{ fontSize: '1em' }}>
                      Flom- og farevarsel
                    </Typography>
                  </Stack>
                  <Typography variant="h3">
                    Nøyaktig flomvarsling <br />- 24 timer i forkant
                  </Typography>
                  <Typography variant="body1">
                    Klimaendringer har skapt et behov for en løsning som kan forutse og varsle om flomhendelser tidligere, og med større sikkerhet.
                    Tidlig varsling gjør det mulig å iverksette risikioreduserende tiltak for å sikre liv og helse, kritiske tjenester og verdier.
                  </Typography>
                  <Stack direction='row' spacing={2}>
                    <Button
                      size="large"
                      variant="contained"
                      sx={{ borderRadius: '24px' }}
                      to="/solutions"
                      component={Link}
                    >
                      Våre løsninger
                    </Button>
                    <Button
                      size="large"
                      variant="outlined"
                      sx={{
                        borderRadius: '24px',
                        ':hover': {
                          backgroundColor: 'transparent'
                        }
                      }}
                      to="/contact"
                      component={Link}
                    >
                      Kontakt oss
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box
                  justifyContent='flex-end'
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  <Box
                    component="img"
                    src="illustrations/analytics.svg"
                  />
                </Box>
              </Grid>
            </Grid>

          </Container>
        </Box>
      </Box>
    </Page>
  )
}

