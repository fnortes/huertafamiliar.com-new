import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react'

import { getDateNullableText, getTitle } from '@/utils/vegetable'
import GENERAL_CROPS_CONFIG from '@/data/generalCropsTexts'
import VEGETABLES_STATUS_TEXTS from '@/data/vegetableStatusTexts'
import VEGETABLES_START_TYPES_TEXTS from '@/data/vegetablesStartTypesTexts'
import HarvestCard from '@/components/harvestCard'

import { Vegetable } from '../types'

interface Props {
  vegetable: Vegetable
  onClose: () => void
}

export default function ViewDetail({ vegetable, onClose }: Props) {
  const {
    key,
    crop,
    status,
    inventory,
    startedType,
    start,
    toHotbed,
    toM2L,
    toDefinitive,
    harvestStart,
    toDelete,
    dateToHarvest,
    daysToHarvest,
    days,
    nextAction,
    binnacle,
    ratings,
  } = vegetable
  const cropConfig = GENERAL_CROPS_CONFIG[crop.generalName]
  let customStatus = VEGETABLES_STATUS_TEXTS[status]
  const started = VEGETABLES_START_TYPES_TEXTS[startedType]

  if (inventory !== null) {
    customStatus = customStatus.concat(`, en ${inventory.name}`)
  }

  return (
    <Drawer isOpen={true} placement="right" size="lg" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{getTitle(vegetable)}</DrawerHeader>
        <DrawerBody>
          <HStack alignItems="" mb={4} spacing={4}>
            <Image
              alt={`Imagen del cultivo de ${cropConfig.name}`}
              border="1px"
              borderColor="secondary.500"
              borderRadius="lg"
              maxH={48}
              src={cropConfig.img}
            />
            <List fontSize="small" spacing={3}>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Clave única:{' '}
                </Text>
                <Text as="span" color="gray.400">
                  {key}
                </Text>
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Info. cultivo general:{' '}
                </Text>
                <Text as="span" color="gray.400">
                  {`${cropConfig.name} - ${crop.daysToHarvest} días para cosechar desde la siembra`}
                </Text>
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Estado:{' '}
                </Text>
                <Text as="span" color="gray.400">
                  {customStatus}
                </Text>
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Duración:{' '}
                </Text>
                <Text as="span" color="gray.400">
                  {`${days} días`}
                </Text>
              </ListItem>
              {harvestStart === null && (
                <ListItem>
                  <Text as="span">
                    <HarvestCard dateToHarvest={dateToHarvest} daysToHarvest={daysToHarvest} />
                  </Text>
                </ListItem>
              )}
            </List>
          </HStack>
          <List fontSize="small" spacing={3}>
            <ListItem>
              <Text fontWeight="bold">Bitácora automático:</Text>
              <List pl={4}>
                <ListItem>
                  <Text as="span" fontWeight="bold">
                    Arranque:{' '}
                  </Text>
                  <Text as="span" color="gray.400">
                    {`${started}, el ${start}`}
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">
                    A semillero:{' '}
                  </Text>
                  <Text as="span" color="gray.400">
                    {getDateNullableText(toHotbed)}
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">
                    A meceta 2L o similar:{' '}
                  </Text>
                  <Text as="span" color="gray.400">
                    {getDateNullableText(toM2L)}
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">
                    A definitivo:{' '}
                  </Text>
                  <Text as="span" color="gray.400">
                    {getDateNullableText(toDefinitive)}
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">
                    Se inicia la cosecha:{' '}
                  </Text>
                  <Text as="span" color="gray.400">
                    {getDateNullableText(harvestStart)}
                  </Text>
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight="bold">
                    Se elimina:{' '}
                  </Text>
                  <Text as="span" color="gray.400">
                    {getDateNullableText(toDelete)}
                  </Text>
                </ListItem>
              </List>
            </ListItem>
            {nextAction.date !== null && (
              <ListItem>
                <Text as="span" fontWeight="bold">
                  Próxima acción:{' '}
                </Text>
                <Text as="span" color="gray.400">
                  {nextAction.date}
                </Text>
                <Text color="gray.600" pl={4}>
                  {nextAction.description}
                </Text>
              </ListItem>
            )}
            <ListItem>
              <Text fontWeight="bold">Bitácora manual:</Text>
              <Text color="gray.600" pl={4}>
                {binnacle}
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Valoraciones:</Text>
              <Text color="gray.600" pl={4}>
                {ratings}
              </Text>
            </ListItem>
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
