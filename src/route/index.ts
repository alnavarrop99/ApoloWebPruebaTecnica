export enum PARSE {
  'root' = '',
  'app' = 'app',
  'auth' = `auth`,
  'auth/login' = `login`,
  'auth/logout' = `logout`,
  'auth/sigin' = `sigin`,
  'app/$id' = `:id`,
  'app/$id.edit' = `edit`,
  'app/create' = `create`,
  'app/list' = ``,
}

export * as 'root' from './root/route'
export * as 'app' from './app'
export * as 'auth' from './auth/route'
export * as 'auth/login' from './auth/login'
export * as 'auth/sigin' from './auth/sigin'
export * as 'auth/logout' from './auth/logout'
export * as 'app/$id' from './app/$id/route'
export * as 'app/$id.edit' from './app/$id.edit/route'
export * as 'app/create' from './app/create/route'
export * as 'app/list' from './app/list/route'


