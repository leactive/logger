import { createStore } from '@leactive/core'

import logger from 'package'

const store = createStore({
  state: {},
  middlewares: [
    logger,
  ],
})

export default store
