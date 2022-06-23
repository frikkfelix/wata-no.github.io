import React from 'react'
import Page from '../components/Page'
import Gradient from '../components/Gradient'
import { Container, Stack, Typography, Grid } from '@mui/material'
import { employees } from '../config'
import Employee from '../components/Employee'

export default function About() {
  return (
    <Page title='About'>
      <Gradient
        title='Om oss'
        subtitle='Wata ble til gjennom et samarbeidsprosjekt mellom Pipelife og Knowit i 2021. Pipelife er gjennom 50 år Norges største produsent av plastrør og har spesialisert seg på IoT teknologi, mens Knowit er et IT-konsulentselskap med spisskompetanse på Ai og maskinlæring, såvel som alle deler av moderne digitalisering og utvikling av digitale produkter.'
      />
      <Container sx={{ py: 10 }} maxWidth='md'>
        <Grid
          container
          spacing={6}
        >
          {employees.map(employee => (
            <Grid item xs={6} md={4}>
              <Employee {...employee} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  )
}

