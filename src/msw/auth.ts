import { delay, http, HttpResponse } from "msw";
import * as db from "~/db";

export const login = http.post<{}, Parameters<typeof db['login']>['0']['payload']>(
  `${import.meta.env.APOLO_API_URL}/auth/login`, async ({ request }) => {
    try {
      const local = JSON.parse(localStorage.auth as unknown as string) as typeof localStorage.auth
      const req = await request.json()
      const stackError: Partial<Record<keyof typeof req, string>> = { }
      
      await delay(1500)

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
  `${import.meta.env.APOLO_API_URL}/auth/logout`, async () => {
    try {
      await delay(1500)
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
      await delay(1500)
      return HttpResponse.json({})

    } catch(err){
      return HttpResponse.error()
    }
  }
)


