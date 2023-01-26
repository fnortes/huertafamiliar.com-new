import { Vegetable } from '@/vegetable/types'

export const getTitle = (vegetable: Vegetable) =>
  `${vegetable.amount} - ${vegetable.crop.cod} - ${vegetable.crop.name}`

export const getDateNullableText = (date: string | null) => date ?? 'No definido'
