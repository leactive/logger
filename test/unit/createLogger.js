import test from 'ava'
import { createStore } from '@leactive/core'

import createLogger from '@/createLogger'

test('returns logger middleware', t => {
  t.true(createLogger() instanceof Function)
})

test('logger returns store changes handler', t => {
  const logger = createLogger()
  const fakeStore = null

  t.true(logger(fakeStore) instanceof Function)
})

test('changes handler always returns the same value it receives', t => {
  const logger = createLogger()
  const store = createStore({ state: {} })
  const changesHandler = logger(store)

  t.is(changesHandler({ value: 1 }), 1)
  t.is(changesHandler({ value: false }), false)
  t.is(changesHandler({ value: undefined }), undefined)
})
