export * as 'root' from './root/route'
export * as 'app' from './app/loader'
export * as 'landing' from './landing/route'
export * as 'auth' from './auth/route'
export * as 'auth/login' from './auth/login'
export * as 'auth/sigin' from './auth/sigin'
export * as 'auth/logout' from './auth/logout'
export * as 'app/$id' from './app/$id/route'
export * as 'app/$id.edit' from './app/$id.edit/route'
export * as 'app/$id.remove' from './app/$id.remove'
export * as 'app/create' from './app/create/route'
export * as 'app/list' from './app/list/route'

export type TLocalStorage<K extends keyof API_User = 'access_token'> = `aplo_web-${K}`
declare global {
  interface Storage extends Record<TLocalStorage<'access_token'>, string> {
    db: Record<`${number}`, API_Response<'character', 'GET'>>
    auth: Record<string, API_User>
  }
}

