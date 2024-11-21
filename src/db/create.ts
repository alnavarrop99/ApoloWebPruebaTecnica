export type TPayload<T> =
T extends 'character' ? Omit<API_Response<'character'>, 'origin' | 'location' | 'episode' | 'created' | 'url' | 'id'> :
T extends 'location' ? Omit<API_Response<'location'>, 'residents'> : 
T extends 'location' ? Omit<API_Response<'episode'>, 'characters'> : 
unknown

export const create = async <T extends API_Category> ( { params, payload, headers }: { params: { category: T }, payload: TPayload<T>, headers: Partial<Record<'access_token', string>> } ): Promise<API_Response<T> | API_Error> => {
  try{
    const url = new URL(`${import.meta.env.APOLO_API_URL}/${params.category}` satisfies API_Url<typeof params.category>)
    const header = new Headers()
    if(headers?.access_token) header.append('Authorization', `Barear ${headers.access_token}`)

    const req = new Request(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: header
    })
    const res = await fetch(req)
    return res.json() 
  } catch(err){
    return { error: err as string } satisfies API_Error
  }
}
