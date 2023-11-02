import 'whatwg-fetch'
import '@testing-library/jest-dom'
import { QueryCache } from '@tanstack/react-query'

const queryCache = new QueryCache()

import server from './src/mockers/server'

beforeAll(() => server.listen())

afterEach(() => {
  server.resetHandlers(), queryCache.clear()
})

afterAll(() => server.close())
