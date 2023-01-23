import { Vegetable, VegetableCSV } from './types'

import cropVarieties from '@/data/cropVarieties'
import { calculateDateFromNow, calculateDaysBetween } from '@/utils/date'
import inventories from '@/data/inventories'

export const mapCVSVegetables = (result: VegetableCSV): Vegetable => {
  const crop = cropVarieties.find(item => item.cod === result['Cod.']) ?? cropVarieties[0]
  const tempAmount = Number(result.Cantidad)
  const amount = Number.isInteger(tempAmount) ? tempAmount : 0
  const start = result.Inicio !== '' ? result.Inicio : null
  const days = calculateDaysBetween({ startDateString: start })
  const tempDaysToHarvest = crop.daysToHarvest ?? 0
  const daysToHarvest = (tempDaysToHarvest > 0) ? tempDaysToHarvest - days : null
  const inventory = inventories.find(item => item.name === result.Inventario) ?? null

  const dateToHarvest = daysToHarvest !== null ? calculateDateFromNow(daysToHarvest) : null

  return {
    key: `${crop.cod}-${result.Cantidad}-${start ?? ''}-${inventory?.name ?? 'none'}`,
    crop,
    status: result.Estado,
    amount,
    startedType: result.Arranque,
    start,
    toHotbed: result['A semillero'] !== '' ? result['A semillero'] : null,
    toM2L: result['A M2L'] !== '' ? result['A M2L'] : null,
    toDefinitive: result['A definitivo'] !== '' ? result['A definitivo'] : null,
    harvestStart: result['Inicio COS'] !== '' ? result['Inicio COS'] : null,
    toDelete: result['Fin Cultivo'] !== '' ? result['Fin Cultivo'] : null,
    days,
    daysToHarvest,
    dateToHarvest,
    nextAction: {
      date: result['Proxima acción'] !== '' ? result['Proxima acción'] : null,
      description: result['Descripción próxima acción']
    },
    binnacle: result['Observaciones e historial de como va la siembra actual'],
    ratings: result['Valoración para futuras siembras'],
    inventory
  }
}
