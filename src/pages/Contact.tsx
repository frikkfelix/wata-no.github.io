import React from 'react'
import Page from '../components/Page'
import { useTranslation } from 'react-i18next'
import { Avatar, Container, Link, Stack, Typography } from '@mui/material'
import Gradient from '../components/Gradient'
import Employee from '../components/Employee'

export default function Contact() {
  const { t: translate } = useTranslation()

  const contactPerson = {
    image: 'img/employees/gurrich.png',
    name: 'Jonas Gürrich',
    title: 'product manager',
    email: 'jonas.gurrich@knowit.no',
    phone: '+47 95 11 87 44',
  }

  return (
    <Page title={translate('contact.title')}>
      <Gradient
        title='Kontakt oss'
        subtitle='Ta gjerne kontakt med oss for en mer detaljert gjennomgang og hyggelig diskusjon rundt hvordan wata kan løse dine utfordringer.'
      />
      <Container sx={{ py: 10 }}>
        <Employee {...contactPerson} />
      </Container>
    </Page>
  )
}
