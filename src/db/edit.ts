/**
 * TODO:
 * - create a mock with msw and localStorage for edit api
 */

// TODO: YET NOT WORK
export const edit = async <T extends API_Category> ( { params, payload }: { params: { category: T, id: number }, payload: {} } ): Promise<API_Response<T> | API_Error> => {
  const url = new URL(`${import.meta.env.APOLO_API_URL}/${params.category}/${params.id}` satisfies API_Url<typeof params.category>)

  const req = new Request(url, {
    method: 'PATCH',
    body: JSON.stringify(payload)
  })
  const res = await fetch(req)
  return res as unknown as API_Response<T>
}
