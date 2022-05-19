import React from 'react'
import { Box, Container, Divider, Typography, Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t: translate } = useTranslation();

  return (
    <Box
      component='footer'
      sx={{
        position: 'relative',
        bottom: 0,
        width: '100%'
      }}
    >
      <Divider />
      <Container
        sx={{ pt: 5 }}
      >
        <Grid container>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Box
              component='img'
              src='/logo/logo_icon.svg'
              sx={{ height: 24 }}
            />
          </Grid>
          <Grid item xs={8} md={4}>
            <Typography variant="body2" sx={{ pr: { md: 5} }}>
              {translate('footerDescription')}
            </Typography>
          </Grid>
        </Grid>
        <Typography
          component="p"
          variant="body2"
          sx={{
            fontSize: 14,
            mt: 5,
            pb: 5
          }}
        >
          {`© wata ${new Date().getFullYear()}`}
        </Typography>
      </Container>
    </Box>
  )
}

