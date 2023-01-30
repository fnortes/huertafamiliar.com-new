import { SimpleGrid, Text } from '@chakra-ui/react'
import { useState } from 'react'

import HomeCard from '@/vegetable/components/homeCard'
import { INFO } from '@/app/constants'

import { Vegetable } from '../types'
import ViewDetail from '../components/viewDetail'

interface Props {
  vegetables: Vegetable[]
}

export default function Vegetables({ vegetables }: Props) {
  const [vegetableSelected, setVegetableSelected] = useState<Vegetable | null>(null)

  if (vegetables.length === 0) {
    return (
      <Text color="gray.400" fontWeight="bold" textAlign="center">
        {INFO.noVegetables}
      </Text>
    )
  }

  const handleViewDetail = (vegetable: Vegetable | null) => {
    setVegetableSelected(vegetable)
  }

  return (
    <>
      <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(240px, 1fr))">
        {vegetables.slice(0, INFO.maxVegetablesByPage).map(item => (
          <HomeCard key={item.key} vegetable={item} onViewDetail={handleViewDetail} />
        ))}
      </SimpleGrid>
      {vegetableSelected !== null && (
        <ViewDetail isOpen vegetable={vegetableSelected} onClose={() => handleViewDetail(null)} />
      )}
    </>
  )
}
