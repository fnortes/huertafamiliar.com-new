import { calculateDateFromNow, calculateDaysBetween, stringToDate } from '../date'

describe('Date utils', () => {
  describe('stringToDate', () => {
    it('Debería devolver una fecha correcta', () => {
      const date = stringToDate('5/10/19')

      expect(date.getFullYear()).toEqual(2019)
      expect(date.getMonth() + 1).toEqual(10)
      expect(date.getDate()).toEqual(5)
    })

    it('Debería devolver una fecha actual cuando el formato de entrada no es válido', () => {
      const date = stringToDate('')
      const now = new Date()

      expect(date.getFullYear()).toEqual(now.getFullYear())
      expect(date.getMonth()).toEqual(now.getMonth())
      expect(date.getDate()).toEqual(now.getDate())
    })
  })

  describe('calculateDaysBetween', () => {
    it('Debería devolver un cero cuando la fecha de inicio es nula', () => {
      const days = calculateDaysBetween({ startDateString: null })

      expect(days).toEqual(0)
    })

    it('Debería devolver un numero mayor que cero cuando sólo se especifica una fecha de comienzo pasada', () => {
      const days = calculateDaysBetween({ startDateString: '5/10/19' })

      expect(days).toBeGreaterThan(0)
    })

    it('Debería devolver un numero menor que cero cuando se especifica una fecha de comienzo superior a la fecha de fin', () => {
      const endDate = new Date()

      endDate.setFullYear(2018)
      const days = calculateDaysBetween({ startDateString: '5/10/19', endDate })

      expect(days).toBeLessThan(0)
    })

    it('Cuando se le especifican el numero de días a añadir a la fecha de fin, debería devolver el mismo numero de días menos los añadidos', () => {
      const endDate = new Date()

      endDate.setFullYear(2018)
      const originalDays = calculateDaysBetween({ startDateString: '5/10/19', endDate })
      const days = calculateDaysBetween({ startDateString: '5/10/19', endDate, daysToAdd: 10 })

      expect(originalDays).toEqual(days - 10)
    })
  })

  describe('calculateDateFromNow', () => {
    it('Debería devolver un numero mayor que cero cuando sólo se especifica una fecha de comienzo pasada', () => {
      const date = calculateDateFromNow(10)

      expect(date).toContain('/')
    })
  })
})
