import { http, HttpResponse } from "msw";
import * as db from "~/db";

export const edit = http.patch<Record<keyof Parameters<typeof db.edit<'character'>>['0']['params'], string>, Parameters<typeof db['edit']>['0']['payload']>(
  `${import.meta.env.APOLO_API_URL}/character` satisfies API_Url<'character'> + '/:id', async ({ params, request }) => {
    try{
      const local = JSON.parse(localStorage.db as unknown as string) as typeof localStorage.db
      const req = await request.json()

      const data = Object.assign(local[`${+params.id}`], req)

      localStorage.db = JSON.stringify(local) as unknown as typeof localStorage.db
      return HttpResponse.json({ ...data, mock: 'msw active' })
    } catch(err){
      return HttpResponse.error()
    }
  }
)

