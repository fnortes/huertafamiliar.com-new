import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'

import HomeCard from '@/vegetable/components/homeCard'
import defaultMock from '@/vegetable/mocks/default.json'
import { Vegetable } from '@/vegetable/types'
import { getTitle } from '@/utils/vegetable'

const vegetable = defaultMock[0] as Vegetable

test('Debería mostar el título, días y botón', () => {
  render(<HomeCard vegetable={vegetable} />)

  expect(screen.getByText(getTitle(vegetable))).toBeInTheDocument()
})
