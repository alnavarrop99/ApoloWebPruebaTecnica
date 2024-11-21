import { setupWorker } from 'msw/browser'

import { login, sigin, logout, current } from './auth'
import { create } from './create'
import { edit } from './edit'
import { id } from './id'
import { list } from './list'

export const handler = [
  login, logout, sigin, current,
  create, edit, 
  id, list
]

export default setupWorker( ...handler )
