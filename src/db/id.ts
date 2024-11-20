/**
 * EXAMPLE URLs:
 * Character
 * - GET https://rickandmortyapi.com/api/character/2
 * - GET https://rickandmortyapi.com/api/character/[1,2,3]
 *
 * location
 * - GET https://rickandmortyapi.com/api/location/1
 * - GET https://rickandmortyapi.com/api/location/[1,2,3]
 *
 * Episode
 * - GET https://rickandmortyapi.com/api/episode/28
 * - GET https://rickandmortyapi.com/api/episode/[1,2,3]
 */

type TRes<T extends API_Category, A extends Array<number> | number | string> = A extends Array<number> ? API_Response<T, 'ALL'>['results'] : API_Response<T, 'GET'>
export const id = async <T extends API_Category, A extends number | Array<number> | string = number > ( { params }: { params: { category: T, id: A } } ): Promise< TRes<T, A> | API_Error > => {
  try{
    if( typeof params.id === 'string' && !JSON.parse(params.id) ) throw new Error('params not be a number | array')
    const url = new URL(`${import.meta.env.APOLO_API_URL}/${params.category}` satisfies API_Url<typeof params.category> + `/${params.id}`)

    const req = new Request(url, {
      method: 'GET',
    })
    const res = await fetch(req)
    return res.json()
  } catch(err){
    return { error: err as string } satisfies API_Error
  }
}

