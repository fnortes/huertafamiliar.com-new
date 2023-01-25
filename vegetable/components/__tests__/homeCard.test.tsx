import { fireEvent, render, screen } from '@testing-library/react'

import defaultMock from '@/vegetable/mocks/default.json'
import { Vegetable } from '@/vegetable/types'
import { getTitle } from '@/utils/vegetable'

import HomeCard from '../homeCard'

const vegetable = defaultMock[0] as Vegetable
const vegetableWithoutInventory = defaultMock[1] as Vegetable

test('Debería mostar el título, días y botón', () => {
  render(<HomeCard vegetable={vegetable} onViewDetail={jest.fn()} />)

  expect(screen.getByText(getTitle(vegetable))).toBeInTheDocument()
})

test('Debería mostar que no tiene inventarioel título, días y botón', () => {
  render(<HomeCard vegetable={vegetableWithoutInventory} onViewDetail={jest.fn()} />)

  expect(screen.getByText('Sin inventario asignado')).toBeInTheDocument()
})

test('Debería ejectur el onViewDetail cuando se pincha en el botón de Ver Detalle', () => {
  const onViewDetail = jest.fn()

  render(<HomeCard vegetable={vegetable} onViewDetail={onViewDetail} />)
  fireEvent.click(screen.getByText('Ver detalle'))

  expect(onViewDetail).toHaveBeenCalledWith(vegetable)
})
