/**
 * TODO:
 * - create a mock with msw and localStorage for create api
 */

// TODO: YET NOT WORK
export type TPayload<T> =
T extends 'character' ? Omit<API_Response<'character'>, 'origin' | 'location'> :
T extends 'location' ? Omit<API_Response<'location'>, 'residents'> : 
T extends 'location' ? Omit<API_Response<'episode'>, 'characters'> : 
unknown

export const create = async <T extends API_Category> ( { params, payload }: { params: { category: T }, payload: TPayload<T>  } ): Promise<API_Response<T> | API_Error> => {
  try{
    const url = new URL(`${import.meta.env.APOLO_API_URL}/${params.category}` satisfies API_Url<typeof params.category>)

    const req = new Request(url, {
      method: 'POST',
      body: JSON.stringify(payload)
    })
    const res = await fetch(req)
    return res.json() 
  } catch(err){
    return { error: err as string } satisfies API_Error
  }
}
