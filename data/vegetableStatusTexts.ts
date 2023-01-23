import { VegetableStatus } from '@/vegetable/types'

const VEGETABLES_STATUS_TEXTS: Record<VegetableStatus, string> = {
  [VegetableStatus.COS]: 'Cosechando',
  [VegetableStatus.D]: 'En definitivo',
  [VegetableStatus.ELI]: 'Eliminado',
  [VegetableStatus.PEN]: 'Pendiente',
  [VegetableStatus.SA]: 'Sembrado en almácigo',
  [VegetableStatus.SS]: 'Sembrado en semillero',
  [VegetableStatus.T2L]: 'Transp. a maceta 2 L'
}

export default VEGETABLES_STATUS_TEXTS
