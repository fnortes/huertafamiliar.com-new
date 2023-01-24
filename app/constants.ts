import { VegetableStatus } from '../vegetable/types'

export const STATUS_COLORS: Record<VegetableStatus, string> = {
  [VegetableStatus.COS]: 'green.200',
  [VegetableStatus.D]: 'success.100',
  [VegetableStatus.ELI]: 'error.200',
  [VegetableStatus.PEN]: 'orange.200',
  [VegetableStatus.SA]: 'warning.100',
  [VegetableStatus.SS]: 'warning.100',
  [VegetableStatus.T2L]: 'warning.100',
}

export const INFO: {
  avatar: string
  banner: string
  title: string
  description: string
  noVegetables: string
  sheet: string
} = {
  avatar: 'https://via.placeholder.com/128',
  banner: 'https://via.placeholder.com/128',
  title: 'Tu Huerta Familiar',
  description: 'App para la gestión de tu huerta familiar',
  noVegetables: 'No hay cultivos',
  sheet:
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzICPeec3HXcox4UF7G7P1u8FI8Kgohh_yDM_WbjL38s4WnW93VbxrgcZlCUzLQA/pub?output=csv',
}
