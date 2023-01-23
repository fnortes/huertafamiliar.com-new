import axios from 'axios'
import Papa from 'papaparse'

import { Vegetable, VegetableCSV } from './types'
import { mapCVSVegetables } from './model'

export default {
  list: async (): Promise<Vegetable[]> => await axios.get(
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzICPeec3HXcox4UF7G7P1u8FI8Kgohh_yDM_WbjL38s4WnW93VbxrgcZlCUzLQA/pub?output=csv',
    { responseType: 'blob' }
  )
    .then(async response => await new Promise<Vegetable[]>((resolve, reject) => {
      Papa.parse(response.data, {
        header: true,
        complete: (results: Papa.ParseResult<VegetableCSV>) => {
          resolve(results.data.map(mapCVSVegetables))
        },
        error: error => {
          reject(error.message)
        }
      })
    }))
}
