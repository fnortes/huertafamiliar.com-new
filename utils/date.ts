export const stringToDate = (stringDate: string): Date => {
  const [day, month, year] = stringDate.split('/')

  if (
    day !== undefined &&
    day !== '' &&
    month !== undefined &&
    month !== '' &&
    year !== undefined &&
    year !== ''
  ) {
    return new Date(Number('20'.concat(year)), Number(month) - 1, Number(day))
  }

  return new Date()
}

interface CalculateDaysProps {
  startDateString: string | null
  endDate?: Date
  daysToAdd?: number
}

export const calculateDaysBetween = ({
  startDateString,
  endDate = new Date(),
  daysToAdd = 0,
}: CalculateDaysProps): number => {
  if (startDateString === null) {
    return 0
  }

  const startDate = stringToDate(startDateString)

  if (daysToAdd > 0) {
    endDate.setDate(endDate.getDate() + daysToAdd)
  }

  return Math.trunc((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24))
}

export const calculateDateFromNow = (daysToAdd: number): string => {
  const now = new Date()

  now.setDate(now.getDate() + daysToAdd)

  return now.toLocaleDateString('es-ES')
}
