import { SimpleGrid, Text } from '@chakra-ui/react'

import HomeCard from '@/components/homeCard'
import { INFO } from '@/app/constants'

import { Vegetable } from '../types'

interface Props {
  vegetables: Vegetable[]
}

export default function Vegetables({ vegetables }: Props) {
  if (vegetables.length === 0) {
    return (
      <Text color="gray.400" fontWeight="bold" textAlign="center">
        {INFO.noVegetables}
      </Text>
    )
  }

  return (
    <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
      {vegetables.map(item => (
        <HomeCard key={item.key} vegetable={item} />
      ))}
    </SimpleGrid>
  )
}
