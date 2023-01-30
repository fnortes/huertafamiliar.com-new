import {
  Card,
  CardHeader,
  Stack,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
  Image,
  Box,
} from '@chakra-ui/react'

import { Vegetable } from '@/vegetable/types'
import { STATUS_COLORS } from '@/app/constants'
import VEGETABLES_STATUS_TEXTS from '@/data/vegetableStatusTexts'
import GENERAL_CROPS_CONFIG from '@/data/generalCropsTexts'
import { getTitle } from '@/utils/vegetable'
import HarvestCard from '@/components/harvestCard'

interface Props {
  vegetable: Vegetable
  onViewDetail: (vegetable: Vegetable) => void
}

export default function HomeCard({ vegetable, onViewDetail }: Props) {
  const backgroundColor = STATUS_COLORS[vegetable.status]
  const cropConfig = GENERAL_CROPS_CONFIG[vegetable.crop.generalName]

  return (
    <Card backgroundColor={backgroundColor} data-test-id="vegetable">
      <CardHeader padding={3}>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Heading size="sm">{getTitle(vegetable)}</Heading>
            <Heading
              alignItems="center"
              color="secondary.500"
              display="flex"
              fontSize="small"
              justifyContent="flex-end"
              minW={16}
              size="xs"
            >{`${vegetable.days} días`}</Heading>
          </Stack>
          <Stack color="gray.500" direction="row" justifyContent="space-between">
            <Heading size="xs">{`${
              vegetable.inventory?.name ?? 'Sin inventario asignado'
            }`}</Heading>
            <Text fontSize="small" textAlign="right">
              {VEGETABLES_STATUS_TEXTS[vegetable.status]}
            </Text>
          </Stack>
        </Stack>
      </CardHeader>
      <CardBody paddingX={3} paddingY={0}>
        <Stack direction="row" justifyContent="space-between">
          <Image
            alt={`Imagen del cultivo de ${cropConfig.name}`}
            objectFit="contain"
            src={cropConfig.img}
            width="24"
          />
          <Box>
            <HarvestCard
              dateToHarvest={vegetable.dateToHarvest}
              daysToHarvest={vegetable.daysToHarvest}
            />
            {vegetable.nextAction.date !== null && (
              <Text fontSize="small">
                <Text as="span" fontWeight="bold">
                  Próxima acción:{' '}
                </Text>
                <Text as="span">{vegetable.nextAction.date}</Text>
              </Text>
            )}
          </Box>
        </Stack>
      </CardBody>
      <CardFooter padding={3}>
        <Button colorScheme="primary" variant="outline" onClick={() => onViewDetail(vegetable)}>
          Ver detalle
        </Button>
      </CardFooter>
    </Card>
  )
}
