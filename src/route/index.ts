export enum PARSE {
  'root' = '/',
  'login' = `login`,
  'app/$id' = `:id`,
  'app/$id.edit' = `:id/edit`,
  'app/create' = `create`,
  'app/list' = `list`,
}

export * as 'root' from './root'
export * as 'app' from './app'
export * as 'login' from './login/route'
export * as 'app/$id' from './app/$id/route'
export * as 'app/$id.edit' from './app/$id.edit/route'
export * as 'app/create' from './app/create/route'
export * as 'app/list' from './app/list/route'


