// constants
import { SORT_BY } from '@constants/sort'

export type Studio = {
  nodes: {
    id: number
    name: string
  }[]
}

export type variables = {
  page: number
  perPage: number
  sort: SORT_BY
}
