import { VegetableStartTypes } from '@/vegetable/types'

const VEGETABLES_START_TYPES_TEXTS: Record<VegetableStartTypes, string> = {
  [VegetableStartTypes.A]: 'Almácigo',
  [VegetableStartTypes.M2L]: 'Maceta 2 L',
  [VegetableStartTypes.P]: 'Plantón comprado',
  [VegetableStartTypes.SCG]: 'Semillero celdas grandes',
  [VegetableStartTypes.SCP]: 'Semillero celdas pequeñas',
  [VegetableStartTypes.SD]: 'Siembra directa',
  [VegetableStartTypes.SDB]: 'Siembra directa bote',
  [VegetableStartTypes.SIG]: 'Semillero individual grande',
  [VegetableStartTypes.SIP]: 'Semillero individual pequeño'
}

export default VEGETABLES_START_TYPES_TEXTS
