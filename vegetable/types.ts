export enum GeneralCrops {
  ACELGA = 'ACELGA',
  ACHICORIA = 'ACHICORIA',
  AJO = 'AJO',
  ALBAHACA = 'ALBAHACA',
  ALCACHOFA = 'ALCACHOFA',
  APIO = 'APIO',
  AROMATICAS = 'AROMATICAS',
  BERENJENA = 'BERENJENA',
  BONIATO = 'BONIATO',
  BORRAJA = 'BORRAJA',
  BROCOLI = 'BROCOLI',
  CALABACIN = 'CALABACIN',
  CALABAZA = 'CALABAZA',
  CALENDULA = 'CALENDULA',
  CANONIGOS = 'CANONIGOS',
  CAPUCHINA = 'CAPUCHINA',
  CEBOLLA = 'CEBOLLA',
  CEBOLLA_VERDEO = 'CEBOLLA_VERDEO',
  CEBOLLINO = 'CEBOLLINO',
  CHIRIVIAS = 'CHIRIVIAS',
  CILANTRO = 'CILANTRO',
  COLES_BRUSELAS = 'COLES_BRUSELAS',
  COLIFLOR = 'COLIFLOR',
  COLINABO = 'COLINABO',
  ENELDO = 'ENELDO',
  ESCAROLA = 'ESCAROLA',
  ESPARRAGO = 'ESPARRAGO',
  ESPINACA = 'ESPINACA',
  FRESA = 'FRESA',
  GARBANZO = 'GARBANZO',
  GUISANTE = 'GUISANTE',
  HABA = 'HABA',
  HINOJO = 'HINOJO',
  JUDIA = 'JUDIA',
  KALE = 'KALE',
  LAVANDA = 'LAVANDA',
  LECHUGA = 'LECHUGA',
  LENTEJA = 'LENTEJA',
  LOMBARDA = 'LOMBARDA',
  MAIZ = 'MAIZ',
  MANZANILLA = 'MANZANILLA',
  MARGARITA = 'MARGARITA',
  MELON = 'MELON',
  MOSTAZAS_MIZUNAS = 'MOSTAZAS_MIZUNAS',
  NABO = 'NABO',
  NINGUNO = 'NINGUNO',
  OREGANO = 'OREGANO',
  PATATA = 'PATATA',
  PEPINO = 'PEPINO',
  PEREJIL = 'PEREJIL',
  PIMIENTO = 'PIMIENTO',
  PUERRO = 'PUERRO',
  RABANITO = 'RABANITO',
  REMOLACHA = 'REMOLACHA',
  REPOLLO = 'REPOLLO',
  ROMERO = 'ROMERO',
  RUCULA = 'RUCULA',
  SABIA = 'SABIA',
  SANDIA = 'SANDIA',
  TOMATE = 'TOMATE',
  TOMILLO = 'TOMILLO',
  ZANAHORIA = 'ZANAHORIA',
}

export interface CropVarieties {
  cod: string
  name: string
  generalName: GeneralCrops
  daysToHarvest?: number
}

export enum VegetableStatus {
  COS = 'COS',
  D = 'D',
  ELI = 'ELI',
  PEN = 'PEN',
  SA = 'SA',
  SS = 'SS',
  T2L = 'T2L',
}

export enum VegetableStartTypes {
  A = 'A',
  M2L = 'M2L',
  P = 'P',
  SCG = 'SCG',
  SCP = 'SCP',
  SD = 'SD',
  SDB = 'SDB',
  SIG = 'SIG',
  SIP = 'SIP',
}

export interface VegetableCSV {
  'A definitivo': string
  'A M2L': string
  'A semillero': string
  'Arranque': VegetableStartTypes
  'Cantidad': string
  'Clave': string
  'Cod.': string
  'Cosecha': string
  'Cultivo': string
  'Descripción próxima acción': string
  'Días': string
  'Estado': VegetableStatus
  'Fin Cultivo': string
  'Inicio COS': string
  'Inicio': string
  'Inventario': string
  'Observaciones e historial de como va la siembra actual': string
  'Proxima acción': string
  'Valoración para futuras siembras': string
}

interface Measurement {
  width: number
  length: number
}

export interface Inventory {
  name: string
  measurements?: {
    inside: Measurement
    outside: Measurement
  }
}

export interface Vegetable {
  key: string
  crop: CropVarieties
  status: VegetableStatus
  amount: number
  startedType: VegetableStartTypes
  start: string | null
  toHotbed: string | null
  toM2L: string | null
  toDefinitive: string | null
  harvestStart: string | null
  toDelete: string | null
  days: number
  daysToHarvest: number | null
  dateToHarvest: string | null
  nextAction: {
    date: string | null
    description: string
  }
  binnacle: string
  ratings: string
  inventory: Inventory | null
}
