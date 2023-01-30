import defaultMock from '@/vegetable/mocks/default.json'
import { Vegetable } from '@/vegetable/types'

import { getDateNullableText, getTitle } from '../vegetable'

describe('Vegetable Utils', () => {
  describe('getTitle', () => {
    const vegetable = defaultMock[0] as Vegetable

    it('Debería devolver el título bien formado de una hortaliza', () => {
      expect(getTitle(vegetable)).toContain(vegetable.amount.toString())
      expect(getTitle(vegetable)).toContain(vegetable.crop.cod)
      expect(getTitle(vegetable)).toContain(vegetable.crop.name)
    })
  })

  describe('getDateNullableText', () => {
    it('Debería devolver la propia fecha que recibe de entrada', () => {
      const date = '01/01/2023'

      expect(getDateNullableText(date)).toEqual(date)
    })

    it('Debería devolver el texto de fecha no definida', () => {
      expect(getDateNullableText(null)).toEqual('No definido')
    })
  })
})
