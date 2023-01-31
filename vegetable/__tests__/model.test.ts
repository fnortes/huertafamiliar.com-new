import cropVarieties from '@/data/cropVarieties'
import inventories from '@/data/inventories'
import { calculateDateFromNow } from '@/utils/date'

import { mapCVSVegetables } from '../model'
import { Vegetable, VegetableCSV, VegetableStartTypes, VegetableStatus } from '../types'

describe('Vegetable model', () => {
  describe('mapCVSVegetables', () => {
    const vegetableCSV: VegetableCSV = {
      'A definitivo': '29/8/22',
      'A M2L': '27/6/22',
      'A semillero': '27/4/22',
      Arranque: VegetableStartTypes.SCG,
      Cantidad: '9',
      Clave: '',
      'Cod.': 'ADE',
      Cosecha: '-146',
      Cultivo: 'Apio de Elne',
      'Descripción próxima acción': '* MANTENIMIENTO:',
      Días: '266',
      Estado: VegetableStatus.D,
      'Fin Cultivo': '29/10/22',
      'Inicio COS': '29/9/22',
      Inicio: '27/4/22',
      Inventario: 'B. Huerta 3',
      'Observaciones e historial de como va la siembra actual': '* Por ahora, parece que van bien.',
      'Proxima acción': '10/12/22',
      'Valoración para futuras siembras': '* MUY BIEN.',
    }

    const vegetable: Vegetable = {
      key: 'ADE-9-27/4/22-B. Huerta 3',
      crop: cropVarieties.find(item => item.cod === vegetableCSV['Cod.']) ?? cropVarieties[0],
      status: vegetableCSV.Estado,
      amount: Number(vegetableCSV.Cantidad),
      startedType: vegetableCSV.Arranque,
      start: vegetableCSV.Inicio,
      toHotbed: vegetableCSV['A semillero'],
      toM2L: vegetableCSV['A M2L'],
      toDefinitive: vegetableCSV['A definitivo'],
      harvestStart: vegetableCSV['Inicio COS'],
      toDelete: vegetableCSV['Fin Cultivo'],
      days: 278,
      daysToHarvest: -158,
      dateToHarvest: '25/8/2022',
      nextAction: {
        date: vegetableCSV['Proxima acción'],
        description: vegetableCSV['Descripción próxima acción'],
      },
      binnacle: vegetableCSV['Observaciones e historial de como va la siembra actual'],
      ratings: vegetableCSV['Valoración para futuras siembras'],
      inventory: inventories.find(item => item.name === vegetableCSV.Inventario) ?? null,
    }

    test('Debería funcionar bien con un cultivo completo', () => {
      const original: Vegetable = {
        ...mapCVSVegetables(vegetableCSV),
        days: 0,
        daysToHarvest: null,
      }
      const expected: Vegetable = { ...vegetable, days: 0, daysToHarvest: null }

      expect(original).toEqual(expected)
    })

    test('Debería funcionar bien con un cultivo completo de un tipo que no tenga informados los días para cosechar', () => {
      vegetableCSV['Cod.'] = 'CALE'
      const original: Vegetable = {
        ...mapCVSVegetables(vegetableCSV),
        days: 0,
        daysToHarvest: null,
      }
      const expected: Vegetable = {
        ...vegetable,
        days: 0,
        daysToHarvest: null,
        crop: cropVarieties.find(item => item.cod === 'CALE') ?? cropVarieties[0],
        key: 'CALE-9-27/4/22-B. Huerta 3',
        dateToHarvest: null,
      }

      expect(original).toEqual(expected)
    })

    test('Debería funcionar bien con un cultivo no completo', () => {
      vegetableCSV['Cod.'] = 'XXX'
      vegetableCSV.Cantidad = 'a'
      vegetableCSV.Inicio = ''
      vegetableCSV.Inventario = 'None'
      vegetableCSV['A M2L'] = ''
      vegetableCSV['A definitivo'] = ''
      vegetableCSV['Proxima acción'] = ''

      const original: Vegetable = {
        ...mapCVSVegetables(vegetableCSV),
        days: 0,
        daysToHarvest: null,
      }
      const expected: Vegetable = {
        ...vegetable,
        days: 0,
        daysToHarvest: null,
        key: 'ARH-a--none',
        crop: cropVarieties[0],
        amount: 0,
        start: null,
        inventory: null,
        toM2L: null,
        toDefinitive: null,
        nextAction: { ...vegetable.nextAction, date: null },
        dateToHarvest: calculateDateFromNow(cropVarieties[0].daysToHarvest ?? 0),
      }

      expect(original).toEqual(expected)
    })
  })
})
