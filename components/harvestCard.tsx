import { Text } from '@chakra-ui/react'

interface Props {
  daysToHarvest: number
  dateToHarvest: string
}

export default function HarvestCard({ daysToHarvest, dateToHarvest }: Props) {
  const [color, helperText] = daysToHarvest < 0
    ? ['error.500', `(Pasado ${daysToHarvest} días)`]
    : daysToHarvest > 10
      ? ['success.600', `(Faltan ${daysToHarvest} días)`]
      : ['warning.600', `(Faltan ${daysToHarvest} días)`]

  return (
    <Text fontSize="small">
      <Text as="span" fontWeight="bold">Cosechar: </Text>
      <Text as="span" color={color}>{`${dateToHarvest} ${helperText}`}</Text>
    </Text>
  )
}
