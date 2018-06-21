/* @flow */
import { type Middleware } from '@leactive/core'

// eslint-disable-next-line flowtype/no-weak-types
declare function createLogger(): Middleware;

export default createLogger
