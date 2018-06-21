/* @flow */
import type { Store, Mutation, Middleware } from '@leactive/core'

function createLogger(): Middleware {
  return <State: {}>(store: Store<State>) => ({ key, value }: Mutation) => {
    /* eslint-disable no-console */
    console.group(`Mutation [key] ${key}`)
    console.info('Old value:', store.get(key), '\nNew value:', value)
    console.groupEnd()
    /* eslint-enable no-console */

    return value
  }
}

export default createLogger
