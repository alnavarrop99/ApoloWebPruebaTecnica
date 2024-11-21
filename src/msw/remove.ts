import { delay, http, HttpResponse } from "msw";
import * as db from "~/db";

export const remove = http.delete<Record<keyof Parameters<typeof db.remove<'character'>>['0']['params'], string>>(
  `${import.meta.env.APOLO_API_URL}/character` satisfies API_Url<'character'> + '/:id', async ({ params, request }) => {
    try{
      const localAuth = JSON.parse(localStorage.auth as unknown as string) as typeof localStorage.auth
      const access_token = request.headers.get('Authorization') as `Bearer ${string}`
      const searchToken = Object.values(localAuth).find( (data) => access_token.includes(data.access_token) )

      await delay(1000)
      if(!searchToken) return HttpResponse.json({ error: 'not auth' } satisfies API_Error )

      const local = JSON.parse(localStorage.db as unknown as string) as typeof localStorage.db
      local[`${+params.id}`] = null

      localStorage.db = JSON.stringify(local) as unknown as typeof localStorage.db

      return HttpResponse.json({ mock: 'msw active' })
    } catch(err){
      return HttpResponse.error()
    }
  }
)

