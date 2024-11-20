import { http, HttpResponse } from "msw";
import * as db from "~/db";

export const create = http.post<{}, Parameters<typeof db.create<'character'>>['0']['payload']>(
  `${import.meta.env.APOLO_API_URL}/character` satisfies API_Url<'character'>, async ({ request }) => {
    try{
      let index = +(`${Object.keys(localStorage.db as Record<number, any> ?? {}).at(-1)}` || db.MAX.CHARACTER)
      if(index < db.MAX.CHARACTER){
        index = db.MAX.CHARACTER
      }

      const local = JSON.parse(localStorage.db as unknown as string) as typeof localStorage.db
      const req = await request.json()
      const data = local[`${index + 1}`] = { 
        ...req, 
        origin: { url: `${import.meta.url}/custom/character`, name: 'custom' },
        location: { url: `${import.meta.url}/custom/character`, name: 'custom' },
      }

      localStorage.db = JSON.stringify(local) as unknown as typeof localStorage.db
      return HttpResponse.json({ ...data, mock: 'msw active' })
    } catch(err){
      return HttpResponse.error()
    }
  }
)

