import { Helmet } from 'react-helmet-async'
import React, { forwardRef } from 'react'
import { Box } from '@mui/material'

type PageProps = {
  title: string,
  children: React.ReactNode,
  meta?: React.ReactNode
}

const Page = forwardRef(({children, title='', meta}: PageProps, ref) => (
  <>
    <Helmet>
      <title>{title}</title>
      {meta}
    </Helmet>
    <Box ref={ref}>
      {children}
    </Box>
  </>
))

export default Page

