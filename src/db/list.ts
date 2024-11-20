/**
 * EXAMPLE URLs:
 * Character
 * - GET https://rickandmortyapi.com/api/character
 * - GET https://rickandmortyapi.com/api/character/?name=rick&status=alive
 *
 * Location
 * - GET https://rickandmortyapi.com/api/location
 *
 * Episode
 * - GET https://rickandmortyapi.com/api/episode
 */

export const list = async <T extends API_Category> ( { params, query }: { params: { category: T }, query: API_Params<typeof params.category> | Record<keyof API_Params<typeof params.category>, string> } ): Promise<API_Response<T, "ALL"> | API_Error> => {
  const rawParams = Object.fromEntries(Object.entries(query).map(([key, value]) => ([key, `${value}`]))) as Record<keyof typeof query, string>
  const searchParams = new URLSearchParams(rawParams)
  const url = new URL(`${import.meta.env.APOLO_API_URL}/${params.category}/?${searchParams}` satisfies API_Url<typeof params.category>)

  const req = new Request(url, {
    method: 'GET',
  })
  const res = await fetch(req)
  return res as unknown as API_Response<T, 'ALL'>
}
