import axios from 'axios'

import api from '../api'
import defaultMock from '../mocks/default.json'
import emptyMock from '../mocks/empty.json'

jest.mock('axios')

describe('Vegetable api', () => {
  describe('list method', () => {
    const mockSheetCorrectResponse = `Clave,Cod.,Cultivo,Estado,Cantidad,Arranque,Inicio,A semillero,A M2L,A definitivo,Inicio COS,Fin Cultivo,Inventario,Días,Cosecha,Proxima acción,Descripción próxima acción,Observaciones e historial de como va la siembra actual,Valoración para futuras siembras
    ADE-9-27/04/2022,ADE,Apio de Elne,D,9,SCG,27/4/22,,27/6/22,29/8/22,,,B. Huerta 3,266,-146,10/12/22,"* MANTENIMIENTO:
      * Para blanquear los tallos, cuando la planta alcanza los 40-50 cm., poner alrededor un saco de papel o un plástico negro, atado.
      * Después esperar 20 días o más para cosechar, y darle tiempo a que se blanquee.
     * COSECHA:
      * Cuando la planta tenga de 40 a 60 cm., cortando la planta entera, y desechando las hojas más feas exteriores.
      * Otra opción es ir cogiendo hojas conforme tengan un buen tamaño varias veces hasta que saque flor.
     * Si hace mucho calor, mantener a la sombra.
     * Tampoco soporta bien el frío, por debajo de los 7-8 grados no va bien.","* Por ahora, parece que van bien.
     * Transplantadas a M2L.
     * Se pasan las 9 plantas, bien crecidas a definitivo, a 30 cm. de distancia, a tresbolillo.",* MUY BIEN.`

    test('Debería funcionar bien con una respuesta válida', async () => {
      axios.get = jest.fn().mockResolvedValue({
        data: mockSheetCorrectResponse,
      })
      const response = await api.list()

      expect(response).toHaveLength(1)
    })

    test('Debería funcionar bien con una respuesta incorrecta', async () => {
      axios.get = jest.fn().mockResolvedValue({
        data: '',
      })
      const response = await api.list()

      expect(response).toHaveLength(0)
    })
  })

  describe('mock list method', () => {
    test('Debería funcionar bien con el mock por defecto', async () => {
      const response = await api.mock.list()

      expect(response).toHaveLength(defaultMock.length)
    })

    test('Debería funcionar bien con el mock vacío', async () => {
      const response = await api.mock.list('empty')

      expect(response).toHaveLength(emptyMock.length)
    })
  })
})
