import { setupServer } from 'msw/node'

// mocks
import { handlers } from '@mocks/handlers'

const server = setupServer(...handlers)

export default server
