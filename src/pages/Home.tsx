import React from 'react'
import Page from '../components/Page'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { AiOutlineArrowRight } from 'react-icons/all'
import { Link } from 'react-router-dom'
import Partners from '../components/Partners'
import { solutions } from '../config'
import Solutions from '../components/Solutions'


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
              Klimaendringer har skapt et behov for en løsning som kan forutse og varsle om
              flomhendelser tidligere, og med større sikkerhet. Tidlig varsling gjør det mulig å
              iverksette risikoreduserende tiltak for å sikre liv og helse, kritiske tjenester og verdier.
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
      <Partners />
      <Solutions />
    </Page>
  )
}

