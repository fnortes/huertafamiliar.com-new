import { fireEvent, render, screen } from '@testing-library/react'

import { Vegetable } from '@/vegetable/types'
import { INFO } from '@/app/constants'

import defaultMock from '../../mocks/default.json'
import Vegetables from '../vegetables'

describe('Vegetables component', () => {
  test('Debería cargar correctamentecon un array no vacío de cultivos', () => {
    const { container } = render(<Vegetables vegetables={defaultMock as Vegetable[]} />)

    // Miro que se hayan renderizado el numero de cultivos que toca.
    expect(container.querySelectorAll('[data-test-id="vegetable"]')).toHaveLength(
      defaultMock.length,
    )
    // Compruebo que inicialmente, al no existir un cultivo seleccionado, el diálogo no existe.
    expect(() => screen.getByRole('dialog')).toThrow(
      'Unable to find an accessible element with the role "dialog"',
    )

    // Selecciono el primer botón de ver detalle de un cultivo.
    const firstViewDetailButton = container.querySelector('[data-test-id="vegetable"] button')

    if (firstViewDetailButton) {
      // Si existe el botón, hago click sobre el y compruebo que ahora sí existe un diálogo.
      fireEvent.click(firstViewDetailButton)
      expect(screen.getByRole('dialog')).toBeInTheDocument()

      // Hago click sobre el botón de cerrar el diálogo y compruebo de nuevo que el diálogo ya no existe.
      fireEvent.click(screen.getByRole('button', { name: 'Close' }))
      expect(() => screen.getByRole('dialog')).toThrow(
        'Unable to find an accessible element with the role "dialog"',
      )
    }
  })

  test('Debería cargar bien con un listado vacío de cultivos', () => {
    const { container } = render(<Vegetables vegetables={[]} />)

    // Compruebo que renderiza el texto para cuando no tengo cultivos que mostrar.
    expect(screen.getByText(INFO.noVegetables)).toBeInTheDocument()

    // Selecciono el primer botón de ver detalle de un cultivo, que debe ser nulo
    const firstViewDetailButton = container.querySelector('[data-test-id="vegetable"] button')

    expect(firstViewDetailButton).toBeNull()
  })
})
