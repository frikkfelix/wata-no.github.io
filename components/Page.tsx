import Head from 'next/head'
import React from 'react'

type PageProps = {
  title: string,
  children: React.ReactNode,
  meta?: React.ReactNode
}

const Page = ({children, title='', meta}: PageProps) => (
  <>
    <Head>
      <title>{title}</title>
      {meta}
    </Head>
    {children}
  </>
)

export default Page

