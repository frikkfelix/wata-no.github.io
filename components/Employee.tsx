import React from 'react'
import { Avatar, Link, Stack, Typography } from '@mui/material'

type Employee = {
  image: string,
  name: string,
  title: string,
  email?: string,
  phone?: string,
}

export default function Employee(employee: Employee) {
  const {
    image,
    name,
    title,
    email,
    phone,
  } = employee;

  return (
    <Stack alignItems='center' spacing={2}>
      <Avatar
        src={image}
        sx={{
          width: 164,
          height: 164,
          border: '0.1px solid lightgray'
        }}
      />
      <Stack alignItems='center' spacing={1}>
        <Typography variant='h6'>
          {name}
        </Typography>
        <Typography variant="overline">
          {title}
        </Typography>
        {email && <Link href={`mailto:${email}`}>
          <Typography>
            {email}
          </Typography>
        </Link>}
        {phone && <Link href={`tel:${phone.replace(/\s/g, '')}`}>
          <Typography>
            {phone}
          </Typography>
        </Link>}
      </Stack>
    </Stack>
  )
}
