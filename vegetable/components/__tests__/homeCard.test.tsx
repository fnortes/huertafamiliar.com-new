import { render, screen } from '@testing-library/react'

import defaultMock from '@/vegetable/mocks/default.json'
import { Vegetable } from '@/vegetable/types'
import { getTitle } from '@/utils/vegetable'

import HomeCard from '../homeCard'

const vegetable = defaultMock[0] as Vegetable
const vegetableWithoutInventory = defaultMock[1] as Vegetable

test('Debería mostar el título, días y botón', () => {
  render(<HomeCard vegetable={vegetable} />)

  expect(screen.getByText(getTitle(vegetable))).toBeInTheDocument()
})

test('Debería mostar que no tiene inventarioel título, días y botón', () => {
  render(<HomeCard vegetable={vegetableWithoutInventory} />)

  expect(screen.getByText('Sin inventario asignado')).toBeInTheDocument()
})
