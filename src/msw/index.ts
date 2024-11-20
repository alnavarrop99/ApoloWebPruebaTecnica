import { setupWorker } from 'msw/browser'

import { login, sigin, logout } from './auth'
import { create } from './create'
import { edit } from './edit'
import { id } from './id'
import { list } from './list'

export const handler = [
  login, logout, sigin,
  create, edit, 
  id, list
]

export default setupWorker( ...handler )

declare global {
  interface Storage {
    db: Record<`${number}`, API_Response<'character', 'GET'>>
    auth: Record<string, API_User>
  }
}
