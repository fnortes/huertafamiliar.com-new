import axios from 'axios'
import Papa from 'papaparse'

import { INFO } from '@/app/constants'

import { Vegetable, VegetableCSV } from './types'
import { mapCVSVegetables } from './model'

export default {
  list: async (): Promise<Vegetable[]> =>
    axios.get(INFO.sheet, { responseType: 'blob' }).then(
      response =>
        new Promise<Vegetable[]>((resolve, reject) => {
          Papa.parse(response.data, {
            header: true,
            complete: (results: Papa.ParseResult<VegetableCSV>) => {
              resolve(results.data.map(mapCVSVegetables))
            },
            error: error => {
              reject(error.message)
            },
          })
        }),
    ),
  mock: {
    list: (mock: string = 'default'): Promise<Vegetable[]> =>
      import(`./mocks/${mock}.json`).then(result => result.default),
  },
}
