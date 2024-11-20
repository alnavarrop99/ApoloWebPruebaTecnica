/**
 * TODO:
 * - create a mock with msw and localStorage for edit api
 */

// TODO: YET NOT WORK

import { TPayload } from './create'

export const edit = async <T extends API_Category> ( { params, payload }: { params: { category: T, id: number | string }, payload: Partial<TPayload<T>> } ): Promise<API_Response<T> | API_Error> => {
  try{
    if( typeof params.id === 'string' && !JSON.parse(params.id) ) throw new Error('params not be a number')

    const url = new URL(`${import.meta.env.APOLO_API_URL}/${params.category}` satisfies API_Url<typeof params.category> + `/${params.id}`)

    const req = new Request(url, {
      method: 'PATCH',
      body: JSON.stringify(payload)
    })

    const res = await fetch(req)
    return res.json()
  } catch(err){
    return { error: err as string } satisfies API_Error
  }
}
