/* @flow */
import { createStore } from '@leactive/core'

import createLogger from 'package'

const store = createStore({
  state: {},
  middlewares: [
    createLogger(),
  ],
})

export default store
