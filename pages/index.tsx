import { GetStaticProps } from 'next'
import Head from 'next/head'
import { SimpleGrid } from '@chakra-ui/react'

import { Vegetable } from '@/vegetable/types'
import api from '@/vegetable/api'
import HomeCard from '@/components/homeCard'

export const getStaticProps: GetStaticProps = async () => {
  const vegetables = await api.list()

  return {
    props: {
      vegetables,
    },
    revalidate: 60,
  }
}

interface Props {
  vegetables: Vegetable[]
}

export default function Home({ vegetables }: Props) {
  // const filters = []
  // const filter = (item: Vegetable) => {
  //   const temp = filters.map(f => item[f.field] === f.value).filter(f => !f)

  //   return temp.length === 0
  // }

  // const handleOnClick = () => {
  //   filters.push({ field: 'status', value: VegetableStatus.D })
  // }

  return (
    <>
      <Head>
        <title>huertafamiliar.com</title>
        <meta content="App para la gestión de tu huerta familiar" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="fnortes" name="author" />
        <meta content="Francisco Nortes Belmonte" name="copyright" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main>
        {/* <Button onClick={handleOnClick}>Definitivo</Button> */}
        <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
          {vegetables.map(item => (
            <HomeCard key={item.key} vegetable={item} />
          ))}
        </SimpleGrid>
      </main>
    </>
  )
}
