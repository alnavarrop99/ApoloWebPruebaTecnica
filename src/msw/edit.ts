import { delay, getResponse, http, HttpMethods, HttpResponse } from "msw";
import * as db from "~/db";
import { handler } from '.'

export const edit = http.patch<Record<keyof Parameters<typeof db.edit<'character'>>['0']['params'], string>, Parameters<typeof db['edit']>['0']['payload']>(
  `${import.meta.env.APOLO_API_URL}/character` satisfies API_Url<'character'> + '/:id', async ({ params, request }) => {
    try{
      const localAuth = JSON.parse(localStorage.auth as unknown as string) as typeof localStorage.auth
      const access_token = request.headers.get('Authorization') as `Bearer ${string}`
      const searchToken = Object.values(localAuth).find( (data) => access_token.includes(data.access_token) )

      await delay(1000)
      if(!searchToken) return HttpResponse.json({ error: 'not auth' } satisfies API_Error )

      const local = JSON.parse(localStorage.db as unknown as string) as typeof localStorage.db
      const req = await request.json()

      const url = new URL(`${import.meta.env.APOLO_API_URL}/character` satisfies API_Url<'character'> + `/${params.id}`)
      const res = await getResponse(handler, new Request(url, {
        method: HttpMethods.GET,
      }))

      if(!res) throw new Error('params (id) not be available')
      let data = await res.json()

      data = local[`${+params.id}`] = Object.assign(local?.[`${+params.id}`] ?? data, req)

      localStorage.db = JSON.stringify(local) as unknown as typeof localStorage.db

      return HttpResponse.json({ ...data, mock: 'msw active' })
    } catch(err){
      return HttpResponse.error()
    }
  }
)

