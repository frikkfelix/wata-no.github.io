import React from 'react'
import Page from '../components/Page'
import { Box, Container, Stack, Typography } from '@mui/material'


export default function Home() {
  return (
    <Page title="wata.no">
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="background.jpg"
          sx={{
            zIndex: 9,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute'
          }}
        />
        <Container>
          <Stack
            sx={{
              zIndex: 10,
              position: 'relative',
            }}
          >
            <Typography
              variant="h3"
              sx={{ color: 'common.white' }}
            >
              Making sense of water <br />for a sustainable future.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Page>
  )
}

