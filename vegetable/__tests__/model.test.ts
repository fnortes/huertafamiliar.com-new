import cropVarieties from '@/data/cropVarieties'
import inventories from '@/data/inventories'

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
      expect(mapCVSVegetables(vegetableCSV)).toEqual(vegetable)
    })

    test('Debería funcionar bien con un cultivo completo de un tipo que no tenga informados los días para cosechar', () => {
      vegetableCSV['Cod.'] = 'CALE'
      vegetable.crop = cropVarieties.find(item => item.cod === 'CALE') ?? cropVarieties[0]
      vegetable.key = 'CALE-9-27/4/22-B. Huerta 3'
      vegetable.dateToHarvest = null
      vegetable.daysToHarvest = null

      expect(mapCVSVegetables(vegetableCSV)).toEqual(vegetable)
    })

    test('Debería funcionar bien con un cultivo no completo', () => {
      vegetableCSV['Cod.'] = 'XXX'
      vegetableCSV.Cantidad = 'a'
      vegetableCSV.Inicio = ''
      vegetableCSV.Inventario = 'None'
      vegetableCSV['A M2L'] = ''
      vegetableCSV['A definitivo'] = ''
      vegetableCSV['Proxima acción'] = ''
      vegetable.key = 'ARH-a--none'
      vegetable.crop = cropVarieties[0]
      vegetable.amount = 0
      vegetable.start = null
      vegetable.inventory = null
      vegetable.toM2L = null
      vegetable.toDefinitive = null
      vegetable.nextAction.date = null
      vegetable.dateToHarvest = '30/4/2023'
      vegetable.days = 0
      vegetable.daysToHarvest = 90

      expect(mapCVSVegetables(vegetableCSV)).toEqual(vegetable)
    })
  })
})
