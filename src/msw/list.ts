import { bypass, http, HttpMethods, HttpResponse, PathParams } from "msw";
import * as db from "~/db";

export const list = http.get<PathParams<keyof Parameters<typeof db['list']>['0']['params']>>(
  `${import.meta.env.APOLO_API_URL}/character` satisfies API_Url<'character'>, async ({ request }) => {
    try{
      const origin = new URL(request.url)
      const url = new URL(`${import.meta.env.APOLO_API_URL}/character` satisfies API_Url<'character'> + `/?${origin.searchParams}`)
      const req = new Request(url, {
        method: HttpMethods.GET
      })

      const res = await fetch(bypass(req))
      const data = await res.json() as Awaited<ReturnType<typeof db.list<'character'>>>

      if(!('error' in data)){
        const local = JSON.parse(localStorage.db as unknown as string) as typeof localStorage.db
        data.results = data.results.map( (data) => ( local?.[`${data.id}`] || data ) )
      }

      return HttpResponse.json({ ...data, mock: 'msw active' })
    } catch(err){
      return HttpResponse.error()
    }
  }
)

