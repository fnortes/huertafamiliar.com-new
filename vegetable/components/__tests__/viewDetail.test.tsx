import { render, screen } from '@testing-library/react'

import { Vegetable } from '@/vegetable/types'
import { getTitle } from '@/utils/vegetable'

import ViewDetail from '../viewDetail'
import defaultMock from '../../mocks/default.json'

describe('ViewDetail component', () => {
  const vegetable = defaultMock[0] as Vegetable

  test('Debería cargar correctamente', () => {
    render(<ViewDetail isOpen={true} vegetable={vegetable} onClose={jest.fn()} />)

    expect(screen.getByText(getTitle(vegetable))).toBeInTheDocument()
    expect(screen.getByText(vegetable.key)).toBeInTheDocument()
  })
})
