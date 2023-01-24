import { ParsedUrlQuery } from 'querystring'

import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { Vegetable } from '@/vegetable/types'
import api from '@/vegetable/api'
import { INFO } from '@/app/constants'
import Vegetables from '@/vegetable/screens/vegetables'

interface Params extends ParsedUrlQuery {
  mock: string
}

interface OutputProps {
  vegetables: Vegetable[]
}

export const getStaticProps: GetStaticProps<OutputProps, Params> = async ({ params }) => {
  const vegetables = await api.mock.list(params?.mock)

  return {
    props: {
      vegetables,
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: process.env.NODE_ENV === 'production' ? false : 'blocking',
  }
}

interface Props {
  vegetables: Vegetable[]
}

export default function Home({ vegetables }: Props) {
  return (
    <>
      <Head>
        <title>{INFO.title}</title>
        <meta content={INFO.description} name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="fnortes" name="author" />
        <meta content="Francisco Nortes Belmonte" name="copyright" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main>
        <Vegetables vegetables={vegetables} />
      </main>
    </>
  )
}
