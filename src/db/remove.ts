export const remove = async <T extends API_Category> ( { params, headers }: { params: { category: T, id: number | string }, headers: Partial<Record<'access_token', string>> } ): Promise<{} | API_Error> => {
  try{
    if( typeof params.id === 'string' && !JSON.parse(params.id) ) throw new Error('params not be a number')

    const url = new URL(`${import.meta.env.APOLO_API_URL}/${params.category}` satisfies API_Url<typeof params.category> + `/${params.id}`)
    const header = new Headers()
    if(headers?.access_token) header.append('Authorization', `Barear ${headers.access_token}`)

    const req = new Request(url, {
      method: 'DELETE',
      headers: header
    })

    const res = await fetch(req)
    return res.json()
  } catch(err){
    return { error: err as string } satisfies API_Error
  }
}
