/**
 * TODO:
 * - create a mock with msw and localStorage for create api
 */

// TODO: YET NOT WORK
export const create = async <T extends API_Category> ( { params, payload }: { params: { category: T }, payload: {} } ): Promise<API_Response<T>> => {
  const url = new URL(`${import.meta.env.APOLO_API_URL}/${params.category}/` satisfies API_Url<typeof params.category>)

  const req = new Request(url, {
    method: 'POST',
    body: JSON.stringify(payload)
  })
  const res = await fetch(req)
  return res as unknown as API_Response<T>
}
