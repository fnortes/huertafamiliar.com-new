import { VegetableStatus } from './vegetable/types'

export const STATUS_COLORS: Record<VegetableStatus, string> = {
  [VegetableStatus.COS]: 'green.200',
  [VegetableStatus.D]: 'success.100',
  [VegetableStatus.ELI]: 'error.200',
  [VegetableStatus.PEN]: 'orange.200',
  [VegetableStatus.SA]: 'warning.100',
  [VegetableStatus.SS]: 'warning.100',
  [VegetableStatus.T2L]: 'warning.100'
}
