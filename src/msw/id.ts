import { bypass, http, HttpMethods } from "msw";
import { HttpResponse } from "msw";
import * as db from "~/db";

export const id = http.get<Record<keyof Parameters<typeof db['id']>['0']['params'], string>>(
  `${import.meta.env.APOLO_API_URL}/character` satisfies API_Url<'character'> + '/:id', async ({ params }) => {
    try{
      const url = new URL(`${import.meta.env.APOLO_API_URL}/character` satisfies API_Url<'character'> + `/${params.id}`)
      const req = new Request(url, {
        method: HttpMethods.GET,
      })

      const res = await fetch(bypass(req))
      const data = await res.json() as Awaited<ReturnType<typeof db.id<'character'>>>
      const local = JSON.parse(localStorage.db as unknown as string) as typeof localStorage.db

      if(local?.[`${+params.id}`] === null ) return HttpResponse.json({error: 'this charecter not exits (msw)'} satisfies API_Error)

      return HttpResponse.json( Object.assign( local?.[`${+params.id}`] || data, { mock: 'msw active' }) )
    } catch(err){
      return HttpResponse.error()
    }
  }
)

