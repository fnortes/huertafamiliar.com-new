import defaultMock from '@/vegetable/mocks/default.json'
import { Vegetable } from '@/vegetable/types'

import { getTitle } from '../vegetable'

describe('getTitle', () => {
  const vegetable = defaultMock[0] as Vegetable

  it('Debería devolver el título bien formado de una hortaliza', () => {
    expect(getTitle(vegetable)).toContain(vegetable.amount.toString())
    expect(getTitle(vegetable)).toContain(vegetable.crop.cod)
    expect(getTitle(vegetable)).toContain(vegetable.crop.name)
  })
})
