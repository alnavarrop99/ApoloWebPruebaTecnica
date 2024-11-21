import { setupWorker } from 'msw/browser'

import { login, sigin, logout, current } from './auth'
import { create } from './create'
import { edit } from './edit'
import { id } from './id'
import { list } from './list'
import { remove } from './remove'

export const handler = [
  login, logout, sigin, current,
  create, edit, remove,
  id, list
]

export default setupWorker( ...handler )
