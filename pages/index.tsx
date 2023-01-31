import { GetStaticProps } from 'next'
import Head from 'next/head'

import { Vegetable } from '@/vegetable/types'
import api from '@/vegetable/api'
import { INFO } from '@/app/constants'
import Vegetables from '@/vegetable/screens/vegetables'

export const getStaticProps: GetStaticProps = async () => {
  const vegetables = await api.list()

  return {
    props: {
      vegetables,
    },
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
