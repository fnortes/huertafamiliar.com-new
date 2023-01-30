import { render, screen } from '@testing-library/react'

import HarvestCard from '../harvestCard'

describe('HarvestCard component', () => {
  test('Debería devolver un componente vacío', () => {
    const wrapper = render(<HarvestCard dateToHarvest={null} daysToHarvest={null} />)

    expect(wrapper.container).toBeEmptyDOMElement()
  })

  test('Debería devolver el texto con días a pasado', () => {
    render(<HarvestCard dateToHarvest="01/01/2023" daysToHarvest={-1} />)

    expect(screen.getByText('01/01/2023 (Pasado -1 días)')).toBeInTheDocument()
  })

  test('Debería devolver el texto del día actual', () => {
    render(<HarvestCard dateToHarvest="01/01/2023" daysToHarvest={0} />)

    expect(screen.getByText('01/01/2023 (Es hoy!!!)')).toBeInTheDocument()
  })

  test('Debería devolver el texto con días a futuro', () => {
    render(<HarvestCard dateToHarvest="01/01/2023" daysToHarvest={1} />)

    expect(screen.getByText('01/01/2023 (Faltan 1 días)')).toBeInTheDocument()
  })

  test('Debería devolver el texto con días a futuro con más de días 10', () => {
    render(<HarvestCard dateToHarvest="01/01/2023" daysToHarvest={11} />)

    expect(screen.getByText('01/01/2023 (Faltan 11 días)')).toBeInTheDocument()
  })
})
