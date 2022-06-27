import React from 'react'
import { Box, Container, Divider, Typography, Grid, Stack, Link as MUILink } from '@mui/material'
import Link from 'next/link'
import navConfig from './navConfig'

function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#FFFFFF'
      }}
    >
      <Divider />
      <Container
        sx={{ pt: 5 }}
      >
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 2 }}>
            <Box
              component='img'
              src='/logo/logo_icon.svg'
              sx={{ height: 24 }}
            />
          </Grid>
          <Grid item xs={8} md={4}>
            <Typography variant="body2" sx={{ pr: { md: 5} }}>
              Universitetsgata 7
              <br/>
              0164 Oslo
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
            >
              <Stack key='owners' spacing={1} sx={{ mt: { xs: 5, md: 0 } }}>
                <Typography component="p" variant="overline">
                  wata
                </Typography>
                {navConfig.map(item => (
                  <Link key={item.title} href={item.path} passHref>
                    <MUILink
                      sx={{
                        color: 'text.primary',
                        display: 'block',
                        ':hover': {
                          textDecoration: 'none',
                          color: 'action.hover',
                        }
                      }}
                    >
                      <Typography sx={{ textTransform: 'capitalize' }} variant={'body2'}>
                        {item.title}
                      </Typography>
                    </MUILink>
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Typography
          component="p"
          variant="body2"
          sx={{
            fontSize: 14,
            mt: 5,
            pb: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {`© wata ${new Date().getFullYear()}`}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer

