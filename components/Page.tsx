import Head from 'next/head'
import React, { forwardRef } from 'react'
import { Box } from '@mui/material'

type PageProps = {
  title: string,
  children: React.ReactNode,
  meta?: React.ReactNode
}

const Page = forwardRef(({children, title='', meta}: PageProps, ref) => (
  <>
    <Head>
      <title>{title}</title>
      {meta}
    </Head>
    <Box ref={ref}>
      {children}
    </Box>
  </>
))

export default Page

