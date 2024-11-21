import { delay, http, HttpResponse } from "msw";
import * as db from "~/db";

export const current = http.get<{}>(
  `${import.meta.env.APOLO_API_URL}/auth/login`, async ({ request }) => {
    try {
      const localAuth = JSON.parse(localStorage.auth as unknown as string) as typeof localStorage.auth
      const access_token = request.headers.get('Authorization') as `Bearer ${string}`
      const data = Object.values(localAuth).find( (data) => access_token.includes(data.access_token) )

      if(!data) return HttpResponse.json({ error: 'not auth' } satisfies API_Error )

      return HttpResponse.json<Exclude<Awaited<ReturnType<typeof db['current']>>, API_Error>>({
        id: data.id,
        username: data.username
      })

    } catch(err){
      return HttpResponse.error()
    }
  }
)

export const login = http.post<{}, Parameters<typeof db['login']>['0']['payload']>(
  `${import.meta.env.APOLO_API_URL}/auth/login`, async ({ request }) => {
    try {
      const local = JSON.parse(localStorage.auth as unknown as string) as typeof localStorage.auth
      const req = await request.json()
      const stackError: Partial<Record<keyof typeof req, string>> = { }
      
      if(!(req.username in local)){
        stackError.username = 'user not exits'
      } else if( req.password !== local[req.username].password ) {
        stackError.password = 'password incorrect'
      } else {
      }

      if(!Object.keys( stackError ).length) return HttpResponse.json(local[req.username])
      return HttpResponse.json({ error: 'not auth', stack: stackError } satisfies API_Error & { stack: typeof stackError })

    } catch(err){
      return HttpResponse.error()
    }
  }
)

export const logout = http.post<{}, {}>(
  `${import.meta.env.APOLO_API_URL}/auth/logout`, async ({ request }) => {
    try {
      const local = JSON.parse(localStorage.auth as unknown as string) as typeof localStorage.auth
      const access_token = request.headers.get('Authorization') as `Bearer ${string}`
      const data = Object.values(local).find( (data) => access_token.includes(data.access_token) )

      await delay(1000)
      if(!data) return HttpResponse.json({ error: 'not auth' } satisfies API_Error)
      return HttpResponse.json({})
    } catch(err){
      return HttpResponse.error()
    }
  }
)

export const sigin = http.post<{}, Parameters<typeof db['sigin']>['0']['payload']>(
  `${import.meta.env.APOLO_API_URL}/auth/sigin`, async ({ request }) => {
    try {
      const local = JSON.parse(localStorage.auth as unknown as string) as typeof localStorage.auth
      const req = await request.json()

      const index = +(Object.keys(local).sort( (a, b) => (+a - +b) ).at(-1) || '1')
      local[req.username] = {
        ...req,
        id: index + 1,
        access_token: crypto.randomUUID()
      }

      localStorage.auth = JSON.stringify(local) as unknown as typeof localStorage.auth
      await delay(1000)
      return HttpResponse.json({})

    } catch(err){
      return HttpResponse.error()
    }
  }
)


